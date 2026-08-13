export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-gray-800 bg-[#111827] p-10 md:p-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-green-400">
          Contact
        </p>

        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Let's build something together
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          I'm always interested in AI, machine learning, and software engineering
          opportunities, freelance projects, and collaborations.
        </p>

        <div className="grid gap-4 text-gray-300 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>preetpro.learning@gmail.com</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p>Ahmedabad, Gujarat, India</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">GitHub</p>
            <a href="https://github.com/Preeet-s">
            <p>Preeet-s</p>
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <a href="https://www.linkedin.com/in/preet-sumara/">
            <p>Preet Sumara</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}