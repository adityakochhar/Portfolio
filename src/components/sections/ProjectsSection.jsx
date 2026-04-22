import { FiGithub, FiGlobe } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";

function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20 border-b border-slate-800/80"
    >
      <SectionHeading title="Projects" subtitle="Featured Work" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.15)]"
          >
            <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {(project.github || project.demo) && (
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-slate-200 transition hover:text-sky-300"
                  >
                    <FiGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-slate-200 transition hover:text-sky-300"
                  >
                    <FiGlobe /> View project
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
