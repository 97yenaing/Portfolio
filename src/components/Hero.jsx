import { ArrowDownRight, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { stats } from '../data/portfolio'

export default function Hero() {
  return <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
    <div className="hero-glow" />
    <div className="container-shell relative">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-5xl">
        <div className="mb-7 flex flex-wrap items-center gap-3"><span className="status-dot"><i /> Available for the right opportunity</span><span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"><MapPin size={15} /> Yangon, Myanmar</span></div>
        <p className="eyebrow">Software engineer · Backend specialist</p>
        <h1 className="hero-title">I build reliable systems<br />for <span>real-world impact.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">I’m Ye Naing, a backend-focused software engineer turning complex data and business requirements into maintainable products with <strong className="text-ink dark:text-white">.NET, Laravel, and relational databases.</strong></p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/yenaing_resume.pdf" download className="button-primary"><Download size={18} /> Download CV</a>
          <Link to="/projects" className="button-secondary">View projects <ArrowDownRight size={18} /></Link>
          <Link to="/contact" className="button-quiet">Contact me <ArrowUpRight size={18} /></Link>
        </div>
      </motion.div>
      <div className="mt-20 grid grid-cols-2 border-y border-black/10 dark:border-white/10 md:grid-cols-4">{stats.map(([value, label], i) => <motion.div key={label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="stat"><strong>{value}</strong><span>{label}</span></motion.div>)}</div>
    </div>
  </section>
}
