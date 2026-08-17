"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  slug: string;
  category: "AI / ML" | "Web Development";
};

type Filter = "All" | "AI / ML" | "Web Development";

const projects: Project[] = [
  {
    title: "RAG PDF Chatbot",
    description:
      "A Retrieval-Augmented Generation chatbot that allows users to upload PDF documents and ask questions with grounded, context-aware answers.",
    technologies: [
      "Python",
      "Streamlit",
      "FastAPI",
      "FAISS",
      "Sentence Transformers",
      "RAG",
    ],
    github: "https://github.com/Preeet-s/rag-pdf-chatbot",
    demo: "https://rag-pdf-chatbot.streamlit.app/",
    image: "/projects/rag-chatbot.png",
    slug: "rag-chatbot",
    category: "AI / ML",
  },
  {
    title: "Mini AutoML Explorer",
    description:
      "An interactive AutoML application that automates data preprocessing, target detection, model training, evaluation, and feature-importance analysis.",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Plotly",
    ],
    github: "https://github.com/Preeet-s/mini-automl-explorer",
    demo: "https://mini-automl-explorer.streamlit.app/",
    image: "/projects/automl-dashboard.png",
    slug: "automl",
    category: "AI / ML",
  },
  {
    title: "Sentiment Analysis System",
    description:
      "An NLP-based sentiment and emotion analysis application with a Flask backend, prediction history, dashboard analytics, and confidence-based results.",
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "HTML/CSS",
    ],
    github: "https://github.com/Preeet-s/sentiment-analysis-system",
    demo: "#",
    image: "/projects/sentiment-dashboard.png",
    slug: "sentiment-analysis",
    category: "AI / ML",
  },
  {
    title: "Resume Analyzer",
    description:
      "An intelligent resume analysis application that extracts information from uploaded resumes, analyzes skills, predicts suitable roles, and evaluates candidate-job alignment.",
    technologies: [
      "Python",
      "Flask",
      "NLP",
      "Scikit-learn",
      "PDF Processing",
      "Machine Learning",
    ],
    github: "https://github.com/Preeet-s/resume-analyzer",
    demo: "#",
    image: "/projects/resume-analyzer.png",
    slug: "resume-analyzer",
    category: "AI / ML",
  },
  {
    title: "Brew & Basils",
    description:
      "A modern café management and customer experience platform with a responsive web interface and an integrated AI chatbot powered by Ollama.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Ollama",
    ],
    github: "https://github.com/Preeet-s/basils-and-brew",
    demo: "https://basils-and-brew.vercel.app/",
    image: "/projects/brew-and-basils.png",
    slug: "brew-and-basils",
    category: "Web Development",
  },
];

const filters: Filter[] = ["All", "AI / ML", "Web Development"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-green-400">
          Portfolio
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          A selection of AI, machine learning, and web applications I have
          designed and built, covering retrieval systems, NLP, automated
          machine learning, intelligent document analysis, and full-stack
          product development.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-green-500 bg-green-500 text-black"
                  : "border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Projects */}
      <motion.div
        layout
        className="grid gap-8 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-10 text-center">
          <p className="text-gray-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
}