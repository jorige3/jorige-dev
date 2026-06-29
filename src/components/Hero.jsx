function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6"
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
          Welcome to jorige.dev
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Kishore Kumar J
          <br />
        </h1>

        <h2 className="mt-6 text-2xl text-slate-300">
          Full-Stack Developer | AI & Automation Builder
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          I build practical AI tools, full-stack web applications, backend
          services, and automation systems using React, Python, FastAPI,
          Docker, PostgreSQL, and Linux.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400"
          >
            Contact Me
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
