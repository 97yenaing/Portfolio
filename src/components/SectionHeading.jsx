export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="mb-10 max-w-2xl md:mb-14">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 md:text-lg">{description}</p>}
  </div>
}
