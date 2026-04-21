import SectionHeading from "../common/SectionHeading";

function SkillsSection({ skills }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-20 border-b border-slate-800/80">
      <SectionHeading title="Skills" subtitle="Tech Stack" />
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-100">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
