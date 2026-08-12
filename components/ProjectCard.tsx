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
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
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
      <Link href={demo} className="block">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={demo}>
          <h3 className="mb-3 text-2xl font-semibold transition group-hover:text-green-400">
            {title}
          </h3>
        </Link>

        <p className="mb-5 text-gray-400">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            href={demo}
            className="rounded-lg bg-green-500 px-4 py-2 font-medium text-black transition hover:bg-green-400">
            View Case Study
          </Link>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-4 py-2 font-medium transition hover:border-gray-500">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}