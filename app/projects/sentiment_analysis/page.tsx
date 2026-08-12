import Image from "next/image";
import Link from "next/link";

export default function SentimentAnalysisPage() {
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
          Sentiment Analysis System
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300">
          An NLP-powered web application that classifies emotions from user text,
          predicts sentiment categories, displays confidence scores, maintains
          prediction history, and provides interactive analytics through a Flask
          dashboard.
        </p>

        <div className="relative mb-12 overflow-hidden rounded-3xl border border-gray-800">
          <Image
            src="/projects/sentiment-dashboard.png"
            alt="Sentiment Analysis dashboard"
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
              <p className="text-sm text-gray-400">NLP</p>
              <p className="mt-2 text-2xl font-bold">Text Vectorization</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">UI</p>
              <p className="mt-2 text-2xl font-bold">HTML + Tailwind</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-3xl font-semibold">Problem</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Raw text is difficult to analyze at scale. The goal of this project was
            to build a web application that automatically detects the emotional tone
            of user input, provides prediction confidence, and visualizes sentiment
            trends through an interactive dashboard.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">NLP Pipeline</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 text-center text-sm md:grid-cols-6">
              {[
                "Input Text",
                "Clean Text",
                "Tokenize",
                "Vectorize",
                "Predict Emotion",
                "Display Confidence",
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
                "Browser UI",
                "Flask Backend",
                "Text Preprocessing",
                "ML Model",
                "Dashboard & History",
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
              "Emotion classification from text",
              "Confidence score prediction",
              "Prediction history tracking",
              "Interactive analytics dashboard",
              "Emotion distribution visualization",
              "Responsive dark-mode interface",
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
                Why use text vectorization?
              </p>
              <p className="text-gray-300">
                Converting text into numerical vectors enables traditional machine
                learning models to learn emotional patterns from language.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why separate the dashboard from prediction logic?
              </p>
              <p className="text-gray-300">
                Keeping analytics, history, and prediction components modular made
                the application easier to maintain and extend.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why use Flask?
              </p>
              <p className="text-gray-300">
                Flask provides a lightweight backend that is well suited for
                integrating machine learning models with web interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Model Output</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Predicted Emotion",
                "Confidence Score",
                "Emotion Distribution",
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
                • Building an end-to-end NLP classification pipeline
              </li>
              <li>
                • Integrating machine learning models into Flask applications
              </li>
              <li>
                • Designing interactive analytics dashboards
              </li>
              <li>
                • Working with text preprocessing and vectorization techniques
              </li>
              <li>
                • Presenting model predictions in a user-friendly interface
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
            href="https://github.com/yourusername/sentiment-analysis"
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