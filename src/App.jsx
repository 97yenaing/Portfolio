import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import CredentialsPage from './pages/CredentialsPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Portfolio() {
  const [dark, toggleTheme] = useTheme()
  return <><ScrollToTop/><a href="#main" className="skip-link">Skip to content</a><Header dark={dark} toggleTheme={toggleTheme}/><main id="main"><Routes><Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/skills" element={<SkillsPage/>}/><Route path="/experience" element={<ExperiencePage/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/credentials" element={<CredentialsPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></main><Footer/></>
}

export default function App() { return <Portfolio/> }
