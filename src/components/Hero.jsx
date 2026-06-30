const techStack = [
  "React",
  "Python",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "Linux",
  "AI",
]

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 md:pt-24"
    >
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Hello, I&apos;m
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Kishore Kumar J
        </h1>

        <div className="mt-6 space-y-2 text-2xl font-semibold text-slate-200 md:text-3xl">
          <p>Full-Stack Developer</p>
          <p className="text-cyan-400">AI & Automation Builder</p>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Building practical AI tools, automation systems, and modern web
          applications that solve real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero