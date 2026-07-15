function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
        Contact
      </p>

      <h2 className="text-4xl font-bold">Let’s build something useful.</h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400 transition-colors duration-300">
        I’m open to freelance projects, remote work, internships, and
        collaboration opportunities in full-stack development, AI tools, and
        automation.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:jorige369@gmail.com"
          className="rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-500 dark:hover:bg-cyan-400 px-6 py-3 font-semibold shadow-lg shadow-cyan-600/10 dark:shadow-none"
        >
          Email Me
        </a>

        <a
          href="https://github.com/jorige3"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-6 py-3 font-semibold"
        >
          GitHub
        </a>

        <a
          href="https://www.upwork.com/freelancers/~019b73eef6a25caa91"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-6 py-3 font-semibold"
        >
          Upwork
        </a>

        <a
          href="https://wa.me/919032557159"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-6 py-3 font-semibold"
        >
          WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/kishore-kumar-jorige-182927414/"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-6 py-3 font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact;
