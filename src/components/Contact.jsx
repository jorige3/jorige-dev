function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Contact
      </p>

      <h2 className="text-4xl font-bold">Let’s build something useful.</h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        I’m open to freelance projects, remote work, internships, and
        collaboration opportunities in full-stack development, AI tools, and
        automation.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:jorige369@gmail.com"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Email Me
        </a>

        <a
          href="https://github.com/jorige3"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          GitHub
        </a>

        <a
          href="https://www.upwork.com/freelancers/~019b73eef6a25caa91"
          target="_blank"
          rel="noreferrer"
        
        >
          Upwork
        </a>

        <a
          href="https://wa.me/919032557159"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/kishore-kumar-jorige-182927414/"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
