import { projects } from "../data/projects";

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 p-6 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-cyan-600 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-none ${
        featured ? "md:grid md:grid-cols-2 md:gap-8" : ""
      }`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className={`mb-6 w-full rounded-2xl shadow-sm dark:shadow-lg border border-slate-100 dark:border-transparent transition duration-500 group-hover:scale-[1.02] ${
            featured
              ? "h-72 md:mb-0 object-contain bg-white"
              : "h-56 object-cover"
          }`}
        />
      )}

      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300 md:text-3xl">
            {project.title}
          </h3>

          <span className="rounded-full border border-cyan-600/30 bg-cyan-500/10 dark:border-cyan-400/30 dark:bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 transition-colors duration-300">
            {project.status}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
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
              className="rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 transition-colors duration-300 hover:bg-cyan-500 dark:hover:bg-cyan-400 px-4 py-2 font-semibold"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 transition hover:border-cyan-600 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-4 py-2 font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="w-full bg-white dark:bg-transparent border-y border-slate-100 dark:border-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
          Projects
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
            Selected work that shows what I can build.
          </h2>

          <p className="max-w-md text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Real projects built with modern frontend, backend, AI, automation,
            and deployment tools.
          </p>
        </div>

        {featuredProject && (
          <div className="mt-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
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
      </div>
    </section>
  );
}

export default Projects;