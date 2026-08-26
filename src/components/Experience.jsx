import { experiences } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return <section id="experience" className="section-space"><div className="container-shell">
    <SectionHeading eyebrow="03 / Experience" title="Building and supporting products that matter." />
    <div className="relative ml-2 border-l border-black/15 dark:border-white/15 md:ml-40">{experiences.map((job) => <article key={job.company} className="relative pb-14 pl-7 last:pb-0 md:pl-12">
      <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-paper dark:ring-ink" />
      <span className="mb-3 block text-sm font-semibold text-slate-500 md:absolute md:-left-40 md:top-1 md:w-32 md:text-right">{job.date}</span>
      <div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl font-bold md:text-3xl">{job.role}</h3>{job.current && <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-mint">CURRENT</span>}</div>
      <p className="mt-1 font-semibold text-emerald-700 dark:text-mint">{job.company} · Myanmar</p><p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">{job.intro}</p>
      <ul className="mt-4 max-w-3xl space-y-2.5 text-slate-600 dark:text-slate-400">{job.bullets.map(b => <li key={b} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />{b}</li>)}</ul>
    </article>)}</div>
  </div></section>
}
