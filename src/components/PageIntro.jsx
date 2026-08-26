import { motion } from 'framer-motion'

export default function PageIntro({ index, eyebrow, title, description }) {
  return <section className="border-b border-black/10 pb-12 pt-32 dark:border-white/10 md:pb-16 md:pt-40">
    <motion.div className="container-shell" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
      <p className="eyebrow">{index} / {eyebrow}</p>
      <h1 className="mt-4 max-w-5xl font-display text-5xl font-extrabold leading-[1.05] tracking-[-.05em] md:text-7xl">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>}
    </motion.div>
  </section>
}
