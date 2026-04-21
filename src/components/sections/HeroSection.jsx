import { FiArrowRight, FiCode } from "react-icons/fi";

function HeroSection({ contactLinks }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20 border-b border-t border-slate-800/80">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs tracking-wide text-slate-300">
        <FiCode className="text-sky-400" />
        Developer Portfolio
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Aditya Kochhar
      </h1>
      <h2 className="mt-4 text-xl font-medium text-sky-400 sm:text-2xl">
        Full Stack Developer (Backend-Focused)
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
        I build scalable backend systems, real-time applications, and
        AI-powered platforms using Node.js, React, and modern web technologies.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
        >
          View Projects <FiArrowRight />
        </a>
        <a
          href={contactLinks.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-sky-400 hover:text-sky-300"
        >
          GitHub
        </a>
        <a
          href={contactLinks.resume}
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-sky-400 hover:text-sky-300"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
