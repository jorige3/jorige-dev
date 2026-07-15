function Resume() {
  return (
    <section
      id="resume"
      className="mx-auto max-w-6xl px-6 py-24 text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
        Resume
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Interested in working together?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 transition-colors duration-300">
        Download my resume to learn more about my experience, projects,
        technical skills, and certifications.
      </p>

      <a
        href="/resume.pdf"
        className="mt-10 inline-block rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 px-8 py-4 text-lg font-semibold transition-all duration-300"
      >
        ⬇ Download Resume
      </a>
    </section>
  );
}

export default Resume;
