import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "RAG PDF Chatbot",
    description:
      "A Retrieval-Augmented Generation chatbot that answers questions from uploaded PDF documents using semantic search, vector embeddings, FAISS indexing, and LLM-based response generation.",
    technologies: [
      "Python",
      "Streamlit",
      "FAISS",
      "LangChain",
      "Sentence Transformers",
    ],
    github: "https://github.com/yourusername/rag-chatbot",
    demo: "/projects/rag-chatbot",
    image: "/projects/rag-chatbot.png",
  },
  {
  title: "Mini AutoML Explorer",
  description:
    "An automated machine learning platform that performs preprocessing, target detection, model training, evaluation, and feature importance visualization for uploaded CSV datasets.",
  technologies: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "Pandas",
    "Plotly",
  ],
  github: "https://github.com/yourusername/automl-explorer",
  demo: "/projects/automl",
  image: "/projects/automl-dashboard.png",
  },
  {
  title: "Sentiment Analysis System",
  description:
    "A web application that classifies emotions from user text, displays confidence scores, maintains prediction history, and provides interactive analytics through a Flask dashboard.",
  technologies: [
    "Python",
    "Flask",
    "Scikit-learn",
    "Tailwind CSS",
    "NLP",
  ],
  github: "https://github.com/yourusername/sentiment-analysis",
  demo: "/projects/sentiment-analysis",
  image: "/projects/sentiment-dashboard.png",
  },
  {
  title: "Resume Analyzer",
  description:
    "An ATS-style resume screening tool that extracts skills from PDF resumes, predicts job roles, and evaluates resume compatibility using natural language processing techniques.",
  technologies: [
    "Python",
    "Flask",
    "NLP",
    "Scikit-learn",
    "pdfplumber",
  ],
  github: "https://github.com/yourusername/resume-analyzer",
  demo: "/projects/resume-analyzer",
  image: "/projects/resume-analyzer.png",
}
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-green-400">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          A selection of AI and machine learning applications I have designed and
          built, covering retrieval systems, NLP, automated machine learning, and
          intelligent document analysis.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}