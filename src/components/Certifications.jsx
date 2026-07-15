import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="w-full bg-white dark:bg-transparent border-y border-slate-100 dark:border-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
          Certifications
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Learning and growing with verified credentials.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-600 dark:hover:border-cyan-400"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="mb-6 h-64 w-full rounded-2xl object-contain bg-slate-50 dark:bg-white p-3 border border-slate-100 dark:border-transparent transition-colors duration-300"
              />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{cert.title}</h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400 transition-colors duration-300">{cert.issuer}</p>

              <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                <p>Issued: {cert.year}</p>
                <p>Certificate ID: {cert.certificateId}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;