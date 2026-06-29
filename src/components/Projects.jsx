import { projects } from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Projects
      </p>

      <h2 className="text-4xl font-bold">
        Selected work I have built.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400"
          >
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-300 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
