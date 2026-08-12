export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-green-400">
            About
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Who I Am</h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I'm an AI-focused developer from Ahmedabad, India, with a strong
            interest in building practical machine learning applications and
            intelligent software systems.
          </p>

          <p>
            My work spans Retrieval-Augmented Generation (RAG), natural language
            processing, automated machine learning, and intelligent document
            analysis. I enjoy turning complex AI concepts into products that people
            can actually use.
          </p>

          <p>
            I'm currently seeking opportunities in AI engineering, machine
            learning, and applied artificial intelligence where I can contribute to
            building real-world AI products.
          </p>
        </div>
      </div>
    </section>
  );
}