function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-medium tracking-widest text-sky-400 uppercase">
        {subtitle}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
