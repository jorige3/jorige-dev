import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Certifications
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Learning and growing with verified credentials.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="mb-6 h-64 w-full rounded-2xl object-contain bg-white p-3"
            />

            <h3 className="text-2xl font-bold text-white">{cert.title}</h3>

            <p className="mt-3 text-slate-400">{cert.issuer}</p>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>Issued: {cert.year}</p>
              <p>Certificate ID: {cert.certificateId}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;