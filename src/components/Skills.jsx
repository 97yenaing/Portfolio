import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return <section id="skills" className="section-space bg-white/55 dark:bg-white/[.025]"><div className="container-shell">
    <SectionHeading eyebrow="02 / Capabilities" title="A practical, backend-first toolkit." description="Progress indicators reflect relative hands-on confidence and are intended as a quick recruiter-friendly overview—not test scores." />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skills.map((skill, i) => <motion.article key={skill.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .05 }} className="card group p-6">
      <div className="flex items-end justify-between"><h3 className="font-display text-xl font-bold">{skill.category}</h3><span className="font-mono text-xs text-slate-400">{skill.level}%</span></div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: .8 }} className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime" /></div>
      <div className="mt-5 flex flex-wrap gap-2">{skill.items.map(item => <span className="skill-pill" key={item}>{item}</span>)}</div>
    </motion.article>)}</div>
  </div></section>
}
