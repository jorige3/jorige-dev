import { projects } from "../data/projects"

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-slate-900 ${
        featured ? "md:grid md:grid-cols-2 md:gap-8" : ""
      }`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className={`mb-6 w-full rounded-2xl shadow-lg transition duration-500 group-hover:scale-[1.02] ${
            featured ? "h-72 md:mb-0 object-contain bg-white" : "h-56 object-cover"

          }`}
        />
      )}

      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            {project.title}
          </h3>

          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            {project.status}
          </span>
        </div>

        <p className="text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300 transition group-hover:text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-4 py-2 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Projects
      </p>

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
          Selected work that shows what I can build.
        </h2>

        <p className="max-w-md text-slate-400">
          Real projects built with modern frontend, backend, AI, automation,
          and deployment tools.
        </p>
      </div>

      {featuredProject && (
        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Project
          </p>
          <ProjectCard project={featuredProject} featured />
        </div>
      )}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects 