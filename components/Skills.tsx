const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
    ],
  },
  {
    title: "NLP & LLMs",
    skills: [
      "RAG",
      "FAISS",
      "LangChain",
      "Sentence Transformers",
      "Text Vectorization",
      "Embeddings",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "Streamlit",
      "Flask",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-green-400">
          Expertise
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">Technical Skills</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-gray-800 bg-[#111827] p-6">
            <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}