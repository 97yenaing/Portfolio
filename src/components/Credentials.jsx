import { ArrowUpRight, Award, GraduationCap, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Credentials() {
  return <section className="section-space"><div className="container-shell">
    <SectionHeading eyebrow="05 / Credentials" title="Learning backed by delivery." />
    <div className="grid gap-5 lg:grid-cols-3">
      <article className="card p-7"><GraduationCap className="text-emerald-500"/><p className="eyebrow mt-6">Education</p><h3 className="mt-2 font-display text-xl font-bold">Bachelor’s Degree (AIERP)</h3><p className="mt-2 text-slate-600 dark:text-slate-400">University of Computer Studies, Yangon</p><p className="mt-4 text-sm font-semibold">Graduated January 2025</p></article>
      <article className="card p-7"><Award className="text-emerald-500"/><p className="eyebrow mt-6">Certification</p><h3 className="mt-2 font-display text-xl font-bold">Relational Database</h3><p className="mt-2 text-slate-600 dark:text-slate-400">freeCodeCamp · Developer Certification</p><a className="credential-link" target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/certification/yenaing/relational-database-v8">View credential <ArrowUpRight size={16}/></a></article>
      <article className="card p-7"><Award className="text-emerald-500"/><p className="eyebrow mt-6">Certification</p><h3 className="mt-2 font-display text-xl font-bold">Verified Technical Credential</h3><p className="mt-2 text-slate-600 dark:text-slate-400">Skilljar · Verified certificate</p><a className="credential-link" target="_blank" rel="noreferrer" href="https://verify.skilljar.com/c/gwjcwyc6mv7p">View credential <ArrowUpRight size={16}/></a></article>
    </div>
    <div className="mt-5 flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5"><Trophy className="shrink-0 text-emerald-500"/><div><h3 className="font-display font-bold">Career highlights</h3><p className="mt-1 text-slate-600 dark:text-slate-400">Progressed from trainee to backend developer while contributing to five core products across healthcare, enterprise operations, content, and recruitment—with ownership spanning development, data quality, deployment, and support.</p></div></div>
  </div></section>
}
