import Image from "next/image";
import Link from "next/link";

export default function AutoMLPage() {
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
          Mini AutoML Explorer
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300">
          A Streamlit-based automated machine learning platform that allows users
          to upload CSV datasets, automatically preprocess data, detect target
          variables, train machine learning models, evaluate performance, and
          visualize feature importance with minimal user intervention.
        </p>

        <div className="relative mb-12 overflow-hidden rounded-3xl border border-gray-800">
          <Image
            src="/projects/automl-dashboard.png"
            alt="Mini AutoML dashboard"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <section className="mb-14">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Framework</p>
              <p className="mt-2 text-2xl font-bold">Streamlit</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">ML Library</p>
              <p className="mt-2 text-2xl font-bold">Scikit-learn</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Data Processing</p>
              <p className="mt-2 text-2xl font-bold">Pandas</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
              <p className="text-sm text-gray-400">Visualization</p>
              <p className="mt-2 text-2xl font-bold">Plotly</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-3xl font-semibold">Problem</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Many beginners struggle with the repetitive steps required before
            training a machine learning model, including handling missing values,
            encoding categorical variables, selecting a target column, choosing a
            model, and evaluating performance. This project automates those steps
            through an interactive web interface.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">AutoML Workflow</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 text-center text-sm md:grid-cols-6">
              {[
                "Upload CSV",
                "Clean Data",
                "Encode Features",
                "Detect Target",
                "Train Model",
                "Evaluate Results",
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
                "Streamlit UI",
                "Pandas DataFrame",
                "Preprocessing Pipeline",
                "Scikit-learn Model",
                "Metrics & Charts",
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
              "CSV dataset upload",
              "Automatic target detection",
              "Missing-value handling",
              "Categorical encoding",
              "Model training and evaluation",
              "Feature importance visualization",
              "Interactive charts with Plotly",
              "Responsive Streamlit interface",
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
                Why automatic target detection?
              </p>
              <p className="text-gray-300">
                Reduces friction for non-technical users by selecting a likely
                target column automatically while still allowing manual override.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why encode categorical features automatically?
              </p>
              <p className="text-gray-300">
                Ensures uploaded datasets can be processed by machine learning
                models without requiring manual preprocessing.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <p className="font-semibold text-white">
                Why use Streamlit?
              </p>
              <p className="text-gray-300">
                Streamlit enables rapid development of interactive data
                applications with minimal frontend code, making experimentation and
                deployment significantly faster.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-3xl font-semibold">Model Evaluation</h2>
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "R² Score",
                "RMSE",
                "Feature Importance",
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
                • Designing a reusable machine learning preprocessing pipeline
              </li>
              <li>
                • Building interactive data applications with Streamlit
              </li>
              <li>
                • Automating repetitive ML workflows
              </li>
              <li>
                • Handling mixed-type datasets and missing values robustly
              </li>
              <li>
                • Presenting model performance through intuitive visualizations
              </li>
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://your-automl-demo.streamlit.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/yourusername/automl-explorer"
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