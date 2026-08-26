import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'
  return <section id="contact" className="section-space bg-ink text-white"><div className="container-shell">
    <SectionHeading eyebrow="06 / Contact" title="Let’s build something dependable." description="Have a role, project, or engineering problem in mind? Send me a note and I’ll get back to you." />
    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><div className="space-y-5"><a className="contact-link" href="mailto:mk.yenaing@gmail.com"><Mail/> <span><small>Email</small>mk.yenaing@gmail.com</span></a><a className="contact-link" href="tel:+959750312681"><Phone/> <span><small>Phone</small>+95 9 750 312 681</span></a><div className="contact-link"><MapPin/> <span><small>Location</small>Yangon, Myanmar</span></div></div><p className="mt-9 max-w-sm text-sm leading-6 text-slate-400">Open to backend and full-stack software engineering opportunities, including hybrid and remote roles.</p></div>
      <form action={endpoint} method="POST" className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2 md:p-8">
        <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label><label><span>Email</span><input type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></label><label className="md:col-span-2"><span>Subject</span><input name="subject" required placeholder="Opportunity or project" /></label><label className="md:col-span-2"><span>Message</span><textarea name="message" required rows="5" placeholder="Tell me a little about what you have in mind..." /></label><button className="button-primary w-full justify-center md:col-span-2" type="submit">Send message <ArrowUpRight size={18}/></button>
      </form>
    </div>
  </div></section>
}
