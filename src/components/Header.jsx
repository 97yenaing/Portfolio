import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/portfolio'

export default function Header({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80">
    <nav className="container-shell flex h-18 items-center justify-between" aria-label="Primary navigation">
      <Link to="/" className="font-display text-xl font-extrabold tracking-tight" aria-label="Ye Naing, home">YN<span className="text-emerald-500">.</span></Link>
      <div className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>{item.label}</NavLink>)}</div>
      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="icon-button" aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button onClick={() => setOpen(!open)} className="icon-button lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </nav>
    {open && <div className="container-shell flex flex-col border-t border-black/5 py-4 dark:border-white/10 lg:hidden">{navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => `py-3 font-semibold ${isActive ? 'text-emerald-600 dark:text-mint' : ''}`}>{item.label}</NavLink>)}</div>}
  </header>
}
