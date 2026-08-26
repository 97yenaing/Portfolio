import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'

export default function About() {
  return <section id="about" className="section-space"><div className="container-shell">
    <SectionHeading eyebrow="01 / About" title="Engineering with ownership, not just output." />
    <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
      <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300"><p>I’m a versatile software engineer with over three years of professional and hands-on experience across backend and full-stack delivery. I specialize in designing REST APIs, modeling relational data, and supporting business-critical applications from development through deployment.</p><p>My experience spans enterprise ticketing, hospital operations, headless content management, and patient reporting. I’m at my best where data integrity, maintainability, and practical problem-solving matter.</p><p>My goal is to join a collaborative engineering team where I can deepen my backend expertise, contribute to thoughtful architecture, and ship software that makes complex work simpler.</p></div>
      <aside className="card p-7"><p className="eyebrow">What I bring</p><ul className="mt-6 space-y-4">{['End-to-end SDLC ownership', 'Strong .NET and Laravel foundation', 'Data-intensive workflow experience', 'Production Linux support', 'Clear stakeholder collaboration'].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={20}/><span>{item}</span></li>)}</ul><Link to="/experience" className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-700 dark:text-mint">See my experience <ArrowUpRight size={17}/></Link></aside>
    </div>
  </div></section>
}
