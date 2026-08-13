"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stages = [
  {
    id: "upload",
    title: "Upload PDF",
    description:
      "The user uploads one or more PDF documents through the Streamlit interface. Files are validated and passed to the document processing pipeline.",
    code: `uploaded_file = st.file_uploader("Upload PDF", type=["pdf"])`,
    details: [
      "Supports PDF documents",
      "Frontend built with Streamlit",
      "Input validation before processing",
    ],
  },
  {
    id: "chunking",
    title: "Chunking",
    description:
      "Extracted text is split into overlapping chunks so semantic meaning is preserved while retrieval remains efficient.",
    code: `chunk_size = 500
chunk_overlap = 100

chunks = text_splitter.split_text(text)`,
    details: [
      "Chunk size: 500 characters",
      "Overlap: 100 characters",
      "Prevents context fragmentation",
    ],
  },
  {
    id: "embeddings",
    title: "Embeddings",
    description:
      "Each chunk is converted into a dense vector representation using a sentence-transformer model.",
    code: `from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(chunks)`,
    details: [
      "Model: all-MiniLM-L6-v2",
      "Vector dimension: 384",
      "Semantic vector representation",
    ],
  },
  {
    id: "faiss",
    title: "FAISS Index",
    description:
      "Embeddings are stored inside a FAISS vector index for fast similarity search.",
    code: `import faiss

index = faiss.IndexFlatL2(384)
index.add(embeddings)`,
    details: [
      "FAISS IndexFlatL2",
      "Fast nearest-neighbor search",
      "Lightweight local vector database",
    ],
  },
  {
    id: "retrieval",
    title: "Retrieval",
    description:
      "The user query is embedded and the most relevant chunks are retrieved from FAISS using vector similarity.",
    code: `query_embedding = model.encode([query])
distances, indices = index.search(query_embedding, k=4)

results = [chunks[i] for i in indices[0]]`,
    details: [
      "Top-k retrieval: 4 chunks",
      "Vector similarity search",
      "Context passed to the LLM",
    ],
  },
  {
    id: "llm",
    title: "LLM Generation",
    description:
      "The retrieved chunks are injected into a prompt and sent to the language model to generate a grounded answer.",
    code: `prompt = build_prompt(query, results)
response = llm.generate(prompt)`,
    details: [
      "Context-aware prompting",
      "Reduced hallucinations",
      "Grounded document responses",
    ],
  },
];

export default function ArchitecturePage() {
  const [selected, setSelected] = useState(stages[0]);

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/projects/rag-chatbot"
          className="mb-8 inline-block text-sm text-green-400 hover:text-green-300"
        >
          ← Back to RAG Case Study
        </Link>

        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          Interactive System Design
        </p>

        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          RAG Architecture Playground
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-300">
          Explore each stage of the Retrieval-Augmented Generation pipeline. Click
          any component below to inspect the implementation, code, and engineering
          decisions behind the system.
        </p>

        <div className="mb-12 grid gap-4 md:grid-cols-6">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelected(stage)}
              className={`rounded-2xl border p-4 text-center transition ${
                selected.id === stage.id
                  ? "border-green-500 bg-green-500/10 text-white"
                  : "border-gray-700 bg-[#111827] text-gray-300 hover:border-gray-500"
              }`}
            >
              <div className="text-sm font-semibold">{stage.title}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-gray-800 bg-[#111827] p-8"
        >
          <h2 className="mb-4 text-3xl font-semibold">{selected.title}</h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            {selected.description}
          </p>

          <div className="mb-8">
            <h3 className="mb-3 text-xl font-semibold">Implementation</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-black p-6">
              <pre className="text-sm text-gray-300">
                <code>{selected.code}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Engineering Notes</h3>
            <ul className="space-y-3">
              {selected.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-xl border border-gray-800 bg-[#0b0f19] p-4 text-gray-300"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}