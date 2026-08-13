
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-green-400">
          AI Engineer Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Preet Sumara
        </h1>

        <h2 className="mb-6 text-2xl font-medium text-gray-300 md:text-3xl">
          AI Engineer | Machine Learning Developer | Applied AI Builder
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-400">
          I build practical AI applications including Retrieval-Augmented Generation
          systems, automated machine learning tools, NLP-powered web applications,
          and intelligent document analysis platforms.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            className="rounded-xl bg-green-500 px-5 py-3 font-medium text-black transition hover:bg-green-400"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Preeet-s"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium transition hover:border-gray-500"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/preet-sumara"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium transition hover:border-gray-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}