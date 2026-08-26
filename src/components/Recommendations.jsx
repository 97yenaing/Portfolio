import { recommendations } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Recommendations() {
  return <section className="pb-24 md:pb-32"><div className="container-shell">
    <SectionHeading eyebrow="Next / Growth roadmap" title="What I’m building toward." description="Three portfolio-ready builds that would make my backend profile even stronger." />
    <div className="grid gap-4 md:grid-cols-3">{recommendations.map((item, i) => <article key={item.title} className="rounded-2xl border border-black/10 p-6 dark:border-white/10"><span className="font-mono text-sm text-emerald-600 dark:text-mint">0{i + 1}</span><h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.text}</p></article>)}</div>
  </div></section>
}
