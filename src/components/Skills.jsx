const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "SQLite",
  "Linux",
  "GitHub",
  "GitHub Actions",
  "AI / RAG",
]

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
        Skills
      </p>

      <h2 className="text-4xl font-bold">
        Technologies I work with.
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white text-slate-700 hover:border-cyan-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-cyan-400 px-5 py-4 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
