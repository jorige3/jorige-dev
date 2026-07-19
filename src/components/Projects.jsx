import { projects } from "../data/projects";

function ProjectCard({ project, featured = false }) {
  const containerClass = featured
    ? "group rounded-3xl border border-slate-200/80 bg-slate-50/30 dark:border-slate-800/80 dark:bg-slate-900/40 p-6 md:p-8 shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-cyan-600/60 dark:hover:border-cyan-400/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] md:grid md:grid-cols-2 md:gap-10"
    : "group rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 p-6 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-cyan-600 dark:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-none";

  const imageClass = featured
    ? "mb-6 md:mb-0 w-full h-72 object-contain bg-slate-950/20 dark:bg-slate-950/40 rounded-2xl shadow-sm dark:shadow-lg border border-slate-100 dark:border-slate-800/50 p-4 transition duration-500 group-hover:scale-[1.02]"
    : "mb-6 w-full h-56 object-cover rounded-2xl shadow-sm dark:shadow-lg border border-slate-100 dark:border-transparent transition duration-500 group-hover:scale-[1.02]";

  const headingClass = featured
    ? "text-3xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300 md:text-4xl tracking-tight"
    : "text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300 md:text-3xl";

  const descriptionClass = featured
    ? "text-slate-600 dark:text-slate-300 transition-colors duration-300 text-base md:text-[17px] leading-relaxed font-normal"
    : "text-slate-600 dark:text-slate-400 transition-colors duration-300";

  return (
    <article className={containerClass}>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className={imageClass}
        />
      )}

      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className={headingClass}>
            {project.title}
          </h3>

          <span className="rounded-full border border-cyan-600/30 bg-cyan-500/10 dark:border-cyan-400/30 dark:bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 transition-colors duration-300">
            {project.status}
          </span>
        </div>

        <p className={descriptionClass}>{project.description}</p>

        {featured && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:border-emerald-400/20 dark:bg-emerald-400/5 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">
              <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              78 Tests
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:border-cyan-400/20 dark:bg-cyan-400/5 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-700 dark:text-cyan-300">
              <svg className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              97% Coverage
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 dark:border-violet-400/20 dark:bg-violet-400/5 px-3 py-1 text-xs font-semibold tracking-wide text-violet-700 dark:text-violet-300">
              <svg className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              GitHub Actions CI
            </span>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
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
          {featured ? (
            <button
              disabled={true}
              aria-disabled="true"
              className="rounded-xl bg-slate-100 text-slate-400 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-500 dark:border-slate-700/50 px-4 py-2 font-semibold cursor-not-allowed"
            >
              Case Study Coming Soon
            </button>
          ) : (
            project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950 transition-colors duration-300 hover:bg-cyan-500 dark:hover:bg-cyan-400 px-4 py-2 font-semibold"
              >
                Live Demo
              </a>
            )
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