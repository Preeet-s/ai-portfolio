import Image from "next/image";
import Link from "next/link";

export default function RagChatbotPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-green-400 hover:text-green-300 transition"
        >
          ← Back to Portfolio
        </Link>

        {/* Hero */}
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          AI Project Case Study
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          RAG PDF Chatbot
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300">
          A Retrieval-Augmented Generation chatbot that allows users to upload PDF
          documents and ask natural-language questions. The system retrieves
          relevant document chunks using vector search and generates grounded
          answers with citations using an LLM.
        </p>

        {/* Screenshot */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-gray-800">
          <Image
            src="/projects/rag-chatbot.png"
            alt="RAG PDF Chatbot interface"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>

        {/* Metrics */}
        <section className="mb-14">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Vector Store</p>
              <p className="mt-2 text-2xl font-bold">FAISS</p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Embeddings</p>
              <p className="mt-2 text-2xl font-bold">
                Sentence Transformers
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Framework</p>
              <p className="mt-2 text-2xl font-bold">Streamlit + FastAPI</p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Pipeline</p>
              <p className="mt-2 text-2xl font-bold">RAG</p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="mb-14">
          <h2 className="mb-4 text-3xl font-semibold">Problem</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Traditional chatbots cannot reliably answer questions about a user's
            private PDF documents. The goal of this project was to build a chatbot
            that retrieves information directly from uploaded documents, reducing
            hallucinations and providing context-aware responses.
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Architecture</h2>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 text-center text-sm md:grid-cols-4">
              <div className="rounded-2xl border border-gray-700 p-4">
                <p className="font-semibold text-white">Frontend</p>
                <p className="text-gray-400">Streamlit UI</p>
              </div>

              <div className="rounded-2xl border border-gray-700 p-4">
                <p className="font-semibold text-white">Backend</p>
                <p className="text-gray-400">FastAPI Service</p>
              </div>

              <div className="rounded-2xl border border-gray-700 p-4">
                <p className="font-semibold text-white">Retrieval</p>
                <p className="text-gray-400">FAISS Vector Index</p>
              </div>

              <div className="rounded-2xl border border-gray-700 p-4">
                <p className="font-semibold text-white">Generation</p>
                <p className="text-gray-400">LLM Response</p>
              </div>
            </div>

            <div className="my-6 border-t border-gray-800" />

            <div className="grid gap-4 text-center text-sm md:grid-cols-5">
              <div className="rounded-2xl border border-gray-700 p-4">
                Upload PDF
              </div>
              <div className="rounded-2xl border border-gray-700 p-4">
                Extract & Chunk
              </div>
              <div className="rounded-2xl border border-gray-700 p-4">
                Generate Embeddings
              </div>
              <div className="rounded-2xl border border-gray-700 p-4">
                FAISS Retrieval
              </div>
              <div className="rounded-2xl border border-gray-700 p-4">
                LLM Answer
              </div>
            </div>
          </div>
        </section>

        {/* RAG Pipeline */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">RAG Pipeline</h2>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 md:grid-cols-6">
              {[
                "Upload PDF",
                "Clean Text",
                "Chunk Document",
                "Create Embeddings",
                "Index with FAISS",
                "Retrieve + Generate",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-gray-700 p-4 text-center text-sm font-medium text-gray-200"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Key Features</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "PDF upload and document indexing",
              "Semantic search using vector embeddings",
              "FAISS-based similarity retrieval",
              "Context-aware LLM responses",
              "Grounded answers with document citations",
              "Clean dark-mode Streamlit interface",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-gray-800 bg-[#111827] p-4 text-gray-200"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Tech Stack</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "Streamlit",
              "FastAPI",
              "FAISS",
              "LangChain",
              "Sentence Transformers",
              "LLM APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-700 px-4 py-2 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Engineering Decisions */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">
            Engineering Decisions
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why FAISS instead of a traditional database?
              </p>
              <p className="text-gray-300">
                FAISS provides extremely fast similarity search for dense vector
                embeddings and is ideal for local development and lightweight
                deployment scenarios.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why chunk documents before indexing?
              </p>
              <p className="text-gray-300">
                Chunking preserves semantic meaning while allowing the retriever to
                return only the most relevant context instead of entire documents.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why separate frontend and backend?
              </p>
              <p className="text-gray-300">
                Streamlit handles the user interface while FastAPI manages
                retrieval, indexing, and response generation, making the system
                easier to maintain and extend.
              </p>
            </div>
          </div>
        </section>

        {/* Code Snippet */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Core Retrieval Logic</h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-black p-6">
            <pre className="text-sm text-gray-300">
{`query_embedding = embedding_model.encode([query])
distances, indices = index.search(query_embedding, k=4)

retrieved_chunks = [documents[i] for i in indices[0]]

prompt = build_prompt(query, retrieved_chunks)
response = llm.generate(prompt)`}
            </pre>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">
            Engineering Challenges
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Challenge: Retrieval quality
              </p>
              <p className="text-gray-300">
                Improved answer accuracy by using semantic embeddings and vector
                similarity search instead of keyword matching.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Challenge: Long documents
              </p>
              <p className="text-gray-300">
                Implemented document chunking to preserve context while keeping
                retrieval efficient and scalable.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Challenge: Hallucination reduction
              </p>
              <p className="text-gray-300">
                Grounded LLM responses using retrieved document context and
                citations rather than relying solely on model memory.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">What I Learned</h2>

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                • Designing an end-to-end Retrieval-Augmented Generation pipeline
              </li>
              <li>
                • Optimizing document chunking for better retrieval quality
              </li>
              <li>
                • Working with vector embeddings and similarity search
              </li>
              <li>
                • Separating frontend and backend responsibilities
              </li>
              <li>
                • Building a production-style AI application with a clean user
                experience
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://your-rag-demo.streamlit.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/yourusername/rag-chatbot"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-700 px-6 py-3 font-medium transition hover:border-gray-500"
          >
            View GitHub
          </a>
        </div>
      </div>
    </main>
  );
}