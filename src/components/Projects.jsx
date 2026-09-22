import { ArrowUpRight, Code2, LockKeyhole } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return <section id="projects" className="bg-white/55 py-16 dark:bg-white/[.025] sm:py-20 md:py-24 lg:py-28"><div className="container-shell">
    <SectionHeading eyebrow="04 / Selected work" title="Systems designed around people and data." description="Professional work is protected by client confidentiality. These summaries describe my contribution without exposing proprietary code or data." />
    <div className="grid gap-5 md:grid-cols-2">{projects.map((project, i) => <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`project-card ${i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      <div className={`project-visual bg-gradient-to-br ${project.accent}`}><span>{project.number}</span><div className="code-lines"><i/><i/><i/><i/></div></div>
      <div className="p-6 md:p-8"><p className="eyebrow">{project.type}</p><h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">{project.title}</h3><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map(t => <span className="skill-pill" key={t}>{t}</span>)}</div><div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-slate-400"><span className="inline-flex items-center gap-2" title="Source code is private"><Code2 size={17}/> Private repository <LockKeyhole size={13}/></span><span className="inline-flex items-center gap-1.5" title="Client-hosted project"><ArrowUpRight size={17}/> Client deployment</span></div></div>
    </motion.article>)}</div>
  </div></section>
}
