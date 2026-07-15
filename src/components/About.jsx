function About() {
  return (
    <section id="about" className="w-full bg-white dark:bg-transparent border-y border-slate-100 dark:border-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
          About Me
        </p>

        <h2 className="text-4xl font-bold">
          Building practical software that solves real problems.
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400 transition-colors duration-300">
          <p>
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">Kishore Kumar J</span>,
            a Full-Stack Developer with a passion for building AI-powered applications,
            automation tools, and modern web solutions.
          </p>

          <p>
            I enjoy working with React, Python, FastAPI, Docker, PostgreSQL, and Linux
            to create software that is clean, reliable, and easy to use.
          </p>

          <p>
            My goal is to continuously learn, build meaningful projects, and help
            businesses solve real-world problems through technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
