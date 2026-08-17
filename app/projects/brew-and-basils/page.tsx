import Link from "next/link";
import Image from "next/image";

export default function BrewAndBasilsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-green-400">
            Web Development · AI Product
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Brew & Basils
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
            A modern café management and customer experience platform
            combining responsive web development with an integrated
            AI-powered chatbot.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://basils-and-brew.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-500 px-5 py-3 font-medium text-black transition hover:bg-green-400"
            >
              View Live Demo
            </a>

            <a
              href="https://github.com/Preeet-s/basils-and-brew"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-3 font-medium transition hover:border-gray-500"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#111827]">
          <Image
            src="/projects/brew-and-basils.png"
            alt="Brew & Basils application preview"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          01 · Overview
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Building a complete digital café experience
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Brew & Basils was designed as a full-stack web experience rather
          than a simple static café website. The application combines a
          responsive frontend, application logic, backend services, and an
          integrated AI assistant into one product.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          The project gave me an opportunity to work across the entire
          development process, from interface design and frontend development
          to backend integration, AI functionality, and deployment.
        </p>
      </section>

      {/* Key Features */}
      <section className="border-y border-gray-800 bg-[#0f1420]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
            02 · Key Features
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            What the application provides
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Responsive Web Interface",
                description:
                  "A modern interface designed to provide a consistent experience across desktop and mobile screen sizes.",
              },
              {
                title: "Café Management",
                description:
                  "Application functionality designed around café operations and the customer experience.",
              },
              {
                title: "AI Chatbot",
                description:
                  "An integrated conversational assistant that adds an AI interaction layer to the application.",
              },
              {
                title: "Full-Stack Architecture",
                description:
                  "Frontend, backend services, application logic, and AI functionality working together as one system.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-800 bg-[#111827] p-6"
              >
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          03 · Architecture
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Application architecture
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          The application is structured around a frontend layer, server-side
          functionality, and an AI layer responsible for conversational
          interactions.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            "React / Vite",
            "Application Logic",
            "Backend / Server",
            "Ollama AI Layer",
          ].map((layer, index) => (
            <div key={layer} className="relative">
              <div className="rounded-2xl border border-gray-800 bg-[#111827] p-6 text-center">
                <span className="text-sm text-green-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-semibold">
                  {layer}
                </h3>
              </div>

              {index < 3 && (
                <div className="my-2 text-center text-gray-600 md:absolute md:right-[-18px] md:top-1/2 md:my-0">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* AI Integration */}
      <section className="border-y border-gray-800 bg-[#0f1420]">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
            04 · AI Integration
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Integrating a local AI assistant
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            One of the most interesting parts of Brew & Basils is the
            integration of an AI chatbot using Ollama. Instead of treating AI
            as a separate experiment, the project integrates conversational
            functionality directly into the product experience.
          </p>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111827] p-6">
            <p className="text-sm text-gray-500">
              AI request flow
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              {[
                "User",
                "React UI",
                "Application Server",
                "Ollama",
                "AI Response",
              ].map((item, index, array) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-lg border border-gray-700 bg-[#0b0f19] px-4 py-2">
                    {item}
                  </span>

                  {index < array.length - 1 && (
                    <span className="text-green-400">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
          05 · Technology Stack
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies used
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "React",
            "Vite",
            "JavaScript",
            "Node.js",
            "Ollama",
            "HTML",
            "CSS",
            "Vercel",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-700 bg-[#111827] px-4 py-2 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="border-y border-gray-800 bg-[#0f1420]">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
            06 · Engineering Decisions
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Building beyond the interface
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                title: "Component-based frontend",
                description:
                  "React was used to structure the interface into reusable components and maintain a scalable frontend architecture.",
              },
              {
                title: "Fast development workflow",
                description:
                  "Vite provides a fast development environment and efficient frontend build workflow.",
              },
              {
                title: "Local AI integration",
                description:
                  "Ollama provides a local model-serving layer, making it possible to integrate conversational AI without relying entirely on a hosted model API.",
              },
              {
                title: "Production deployment",
                description:
                  "The application is deployed as a publicly accessible web product rather than remaining only as a local development project.",
              },
            ].map((decision) => (
              <div
                key={decision.title}
                className="border-l-2 border-green-500 pl-6"
              >
                <h3 className="text-xl font-semibold">
                  {decision.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-green-400">
          07 · Explore the Project
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          See Brew & Basils in action
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Explore the deployed application or inspect the source code on
          GitHub.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://basils-and-brew.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-500 px-5 py-3 font-medium text-black transition hover:bg-green-400"
          >
            View Live Demo
          </a>

          <a
            href="https://github.com/Preeet-s/basils-and-brew"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 font-medium transition hover:border-gray-500"
          >
            View GitHub
          </a>

          <Link
            href="/#projects"
            className="rounded-lg border border-gray-700 px-5 py-3 font-medium text-gray-300 transition hover:border-gray-500"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}