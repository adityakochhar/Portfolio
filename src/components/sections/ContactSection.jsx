import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";

function ContactSection({ contactLinks }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20">
      <SectionHeading title="Contact" subtitle="Let's Connect" />
      <div className="grid gap-4 sm:grid-cols-3">
        <a
          href={`mailto:${contactLinks.email}`}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/60"
        >
          <FiMail className="text-sky-400" />
          <span className="text-sm text-slate-200">Email</span>
        </a>
        <a
          href={contactLinks.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/60"
        >
          <FiGithub className="text-sky-400" />
          <span className="text-sm text-slate-200">GitHub</span>
        </a>
        <a
          href={contactLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/60"
        >
          <FiLinkedin className="text-sky-400" />
          <span className="text-sm text-slate-200">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
