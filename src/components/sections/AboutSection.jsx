import SectionHeading from "../common/SectionHeading";

function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20 border-b border-slate-800/80">
      <SectionHeading title="About Me" subtitle="Who I Am" />
      <p className="max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Computer Science student focused on backend engineering, system design,
        and building scalable products with practical, maintainable
        architecture. I work extensively with the MERN stack and have hands-on
        experience integrating Redis caching, WebSocket-based real-time
        communication, and AI services into production-style applications.
      </p>
    </section>
  );
}

export default AboutSection;
