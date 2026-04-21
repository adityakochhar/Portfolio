import { FiAward } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";

function AchievementsSection({ achievements }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20 border-b border-slate-800/80">
      <SectionHeading title="Achievements" subtitle="Milestones" />
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <FiAward className="mt-0.5 shrink-0 text-sky-400" />
            <span className="text-sm text-slate-300 sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AchievementsSection;
