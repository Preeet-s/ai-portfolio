"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  slug: string;
  category: "AI / ML" | "Web Development";
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
  slug,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827]"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
          {category}
        </span>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-semibold transition group-hover:text-green-400">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-gray-400">{description}</p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {/* Live Demo */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-500 px-4 py-2 font-medium text-black transition hover:bg-green-400"
          >
            View Demo
          </a>

          {/* Case Study */}
          <Link
            href={`/projects/${slug}`}
            className="rounded-lg border border-green-500 px-4 py-2 font-medium text-green-400 transition hover:bg-green-500 hover:text-black"
          >
            Case Study
          </Link>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-4 py-2 font-medium transition hover:border-gray-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}