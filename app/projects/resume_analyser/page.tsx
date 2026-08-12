import Image from "next/image";
import Link from "next/link";

export default function ResumeAnalyzerPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-green-400 hover:text-green-300"
        >
          ← Back to Portfolio
        </Link>

        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          AI Project Case Study
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          Resume Analyzer
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300">
          An ATS-inspired resume screening application that extracts text from PDF
          resumes, identifies technical skills, predicts likely job roles, and
          evaluates resume compatibility through a Flask-based web interface.
        </p>

        <div className="relative mb-12 overflow-hidden rounded-3xl border border-gray-800">
          <Image
            src="/projects/resume-analyzer.png"
            alt="Resume Analyzer dashboard"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <section className="mb-14">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Framework</p>
              <p className="mt-2 text-2xl font-bold">Flask</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">ML Library</p>
              <p className="mt-2 text-2xl font-bold">Scikit-learn</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">PDF Parsing</p>
              <p className="mt-2 text-2xl font-bold">pdfplumber</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">NLP</p>
              <p className="mt-2 text-2xl font-bold">Skill Extraction</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-3xl font-semibold">Problem</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Recruiters often review hundreds of resumes manually. The goal of this
            project was to build an ATS-style application that automatically
            extracts information from resumes, identifies relevant skills, predicts
            suitable job roles, and provides a resume evaluation score.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Document Intelligence Pipeline</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 text-center text-sm md:grid-cols-6">
              {[
                "Upload PDF",
                "Extract Text",
                "Clean Content",
                "Extract Skills",
                "Predict Role",
                "Generate ATS Score",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-gray-700 p-4 text-gray-200"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Architecture</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 text-center text-sm md:grid-cols-5">
              {[
                "Web Interface",
                "Flask Backend",
                "PDF Parser",
                "ML + NLP Engine",
                "ATS Report",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-gray-700 p-4 text-gray-200"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "PDF resume upload and parsing",
              "Automatic text extraction",
              "Skill identification from resume content",
              "Job role prediction",
              "ATS-style resume scoring",
              "Match and missing skills analysis",
              "Clean Flask-based web interface",
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

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Engineering Decisions</h2>
          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why use PDF parsing instead of manual input?
              </p>
              <p className="text-gray-300">
                Recruiters receive resumes as PDF documents, so parsing PDFs makes
                the workflow realistic and closer to real ATS systems.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why predict job roles?
              </p>
              <p className="text-gray-300">
                Role prediction helps candidates understand which positions their
                resumes align with and demonstrates practical NLP classification.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why use a lightweight Flask backend?
              </p>
              <p className="text-gray-300">
                Flask provides a simple way to connect document processing, machine
                learning models, and a user-facing web application.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Analysis Output</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Extracted Skills",
                "Predicted Role",
                "ATS Match Score",
              ].map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-gray-700 p-4 text-center text-gray-200"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">What I Learned</h2>
          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                • Building document-processing workflows for real-world PDFs
              </li>
              <li>
                • Combining NLP techniques with machine learning classification
              </li>
              <li>
                • Designing ATS-style scoring and skill-matching logic
              </li>
              <li>
                • Integrating ML models into a production-style Flask application
              </li>
              <li>
                • Creating user-friendly interfaces for AI-powered analysis tools
              </li>
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-xl bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/yourusername/resume-analyzer"
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