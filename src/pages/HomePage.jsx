import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

export default function HomePage() {
  return <><Hero/><section className="section-space"><div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Backend engineering, end to end</p><h2 className="section-title max-w-4xl">From relational models to production deployments.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Explore my experience building enterprise, healthcare, content, and recruitment products—or learn more about the engineer behind the work.</p></div><div className="flex flex-wrap gap-3"><Link to="/about" className="button-secondary">About me <ArrowUpRight size={18}/></Link><Link to="/experience" className="button-primary">My experience <ArrowUpRight size={18}/></Link></div></div></section></>
}
