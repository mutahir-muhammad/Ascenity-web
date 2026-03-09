import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Mail, Github, Linkedin, ArrowLeft, Send, MapPin, Clock,
  Sparkles, CheckCircle2, AlertCircle, Building2, Cpu, FileText,
  Megaphone, ChevronDown, Loader2
} from 'lucide-react'
import { Reveal, Button, GlassCard, Footer } from '../components/ui'

// ─── TYPES ────────────────────────────────────────────────────────────────────
type ServiceOption =
  | 'Engineering & Architecture'
  | 'Management & Strategy (SRS/SDD/TPD)'
  | 'Creative Marketing & AI Video'
  | 'Full-Lifecycle Studio (All Three)'
  | 'Product Consultation'
  | 'Other'

interface ContactFormData {
  name: string
  email: string
  company?: string
  service: ServiceOption | ''
  budget?: string
  message: string
}

// ─── CONSTANTS ─────────────────────────────────────────────────────────────── 
const SERVICE_OPTIONS: ServiceOption[] = [
  'Engineering & Architecture',
  'Management & Strategy (SRS/SDD/TPD)',
  'Creative Marketing & AI Video',
  'Full-Lifecycle Studio (All Three)',
  'Product Consultation',
  'Other',
]

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Let\'s discuss',
]

const EMAILS = [
  { address: 'Mutahir328@gmail.com', label: 'Mutahir Muhammad', role: 'Founder & Lead Engineer' },
  { address: 'mail.mhassank@gmail.com', label: 'Hassan K.', role: 'Co-Founder & Strategy' },
]

const PILLARS = [
  { icon: <Cpu className="w-5 h-5" />, label: 'Engineering', color: 'text-honolulu', bg: 'bg-honolulu/15 border-honolulu/30' },
  { icon: <FileText className="w-5 h-5" />, label: 'Management', color: 'text-robin', bg: 'bg-robin/15 border-robin/30' },
  { icon: <Megaphone className="w-5 h-5" />, label: 'Marketing', color: 'text-emerald', bg: 'bg-emerald/15 border-emerald/30' },
]

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ mode: 'onTouched' })

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitStatus('submitting')
    try {
      // Build a mailto link with all form data encoded (client-side send)
      const subject = encodeURIComponent(`[Ascenity.dev] New Inquiry: ${data.service || 'General'}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        (data.company ? `Company: ${data.company}\n` : '') +
        `Service: ${data.service}\n` +
        (data.budget ? `Budget: ${data.budget}\n` : '') +
        `\nMessage:\n${data.message}`
      )
      const mailto = `mailto:Mutahir328@gmail.com,mail.mhassank@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailto
      // Small delay to simulate processing, then show success
      await new Promise((r) => setTimeout(r, 800))
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-oxford">
      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="container-px flex items-center justify-between h-16 sm:h-18">
          <Link
            to="/"
            className="font-bold text-snow flex items-center gap-2 hover:text-robin transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden xs:inline">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-robin" />
            <span className="text-snow font-bold text-sm hidden sm:inline">Ascenity.dev</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/engine" className="text-snow/70 hover:text-snow transition text-sm">Engine</Link>
            <Link to="/reliv" className="text-snow/70 hover:text-snow transition text-sm">Relivv</Link>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="section-py relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-robin/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-honolulu/6 rounded-full blur-[80px]" />
        </div>

        <div className="container-px relative z-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/10 border border-robin/20 mb-6">
                  <Mail className="w-4 h-4 text-robin" />
                  <span className="text-robin text-sm font-semibold">Start a Project</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-snow mb-6 leading-tight">
                  Let's Build Your Next{' '}
                  <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                    Venture
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-snow/70 max-w-2xl mx-auto leading-relaxed">
                  Whether you need engineering, strategy documentation, or a full creative marketing campaign — 
                  we're your Concept-to-Market partner. Let's talk.
                </p>
                {/* Three pillars strip */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                  {PILLARS.map((p) => (
                    <div key={p.label} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${p.bg}`}>
                      <span className={p.color}>{p.icon}</span>
                      <span className={`${p.color} text-sm font-semibold`}>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ── MAIN GRID: Form + Sidebar ──────────────────────────────── */}
            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">

              {/* ── CONTACT FORM ─────────────────────────────────────────── */}
              <Reveal delay={0.1}>
                <GlassCard className="!p-8 sm:!p-10">
                  <h2 className="text-2xl font-extrabold text-snow mb-2">Send Us a Message</h2>
                  <p className="text-snow/60 text-sm mb-8">
                    Fill out the form below and we'll get back to you within 24–48 hours.
                  </p>

                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 rounded-full bg-emerald/20 border border-emerald/40 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-emerald" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-snow mb-3">Message Sent!</h3>
                        <p className="text-snow/70 mb-8 leading-relaxed">
                          Your email client should have opened. We'll reply within 24–48 hours.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setSubmitStatus('idle')}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Row 1: Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="name">
                              Full Name <span className="text-robin">*</span>
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Muhammad Ali"
                              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-snow placeholder-snow/30 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 transition-all ${
                                errors.name ? 'border-ruby/60' : 'border-white/15 focus:border-robin/50'
                              }`}
                              {...register('name', {
                                required: 'Name is required',
                                minLength: { value: 2, message: 'At least 2 characters' },
                              })}
                            />
                            {errors.name && (
                              <p className="text-ruby text-xs mt-1.5 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.name.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="email">
                              Email Address <span className="text-robin">*</span>
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="you@company.com"
                              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-snow placeholder-snow/30 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 transition-all ${
                                errors.email ? 'border-ruby/60' : 'border-white/15 focus:border-robin/50'
                              }`}
                              {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: 'Enter a valid email address',
                                },
                              })}
                            />
                            {errors.email && (
                              <p className="text-ruby text-xs mt-1.5 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Company (optional) */}
                        <div>
                          <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="company">
                            Company / Startup <span className="text-snow/40 font-normal">(optional)</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Acme Health Inc."
                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-snow placeholder-snow/30 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 focus:border-robin/50 transition-all"
                            {...register('company')}
                          />
                        </div>

                        {/* Row 3: Service + Budget */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="service">
                              Service Interest <span className="text-robin">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="service"
                                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 transition-all appearance-none cursor-pointer ${
                                  errors.service ? 'border-ruby/60 text-snow' : 'border-white/15 focus:border-robin/50'
                                } [&>option]:bg-oxford [&>option]:text-snow`}
                                style={{ color: 'rgba(255,250,250,0.9)' }}
                                {...register('service', { required: 'Please select a service' })}
                              >
                                <option value="" style={{ color: 'rgba(255,250,250,0.4)' }}>Select a service…</option>
                                {SERVICE_OPTIONS.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                              <ChevronDown className="w-4 h-4 text-snow/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                            {errors.service && (
                              <p className="text-ruby text-xs mt-1.5 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.service.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="budget">
                              Budget Range <span className="text-snow/40 font-normal">(optional)</span>
                            </label>
                            <div className="relative">
                              <select
                                id="budget"
                                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 focus:border-robin/50 transition-all appearance-none cursor-pointer [&>option]:bg-oxford [&>option]:text-snow"
                                style={{ color: 'rgba(255,250,250,0.9)' }}
                                {...register('budget')}
                              >
                                <option value="" style={{ color: 'rgba(255,250,250,0.4)' }}>Select a range…</option>
                                {BUDGET_OPTIONS.map((b) => (
                                  <option key={b} value={b}>{b}</option>
                                ))}
                              </select>
                              <ChevronDown className="w-4 h-4 text-snow/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label className="block text-snow/80 text-sm font-semibold mb-2" htmlFor="message">
                            Project Details <span className="text-robin">*</span>
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-snow placeholder-snow/30 text-sm focus:outline-none focus:ring-2 focus:ring-robin/50 transition-all resize-none leading-relaxed ${
                              errors.message ? 'border-ruby/60' : 'border-white/15 focus:border-robin/50'
                            }`}
                            {...register('message', {
                              required: 'Please describe your project',
                              minLength: { value: 20, message: 'At least 20 characters' },
                            })}
                          />
                          {errors.message && (
                            <p className="text-ruby text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.message.message}
                            </p>
                          )}
                        </div>

                        {/* Error banner */}
                        {submitStatus === 'error' && (
                          <div className="flex items-center gap-3 p-4 rounded-xl bg-ruby/10 border border-ruby/30 text-ruby text-sm">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            Something went wrong. Please email us directly at Mutahir328@gmail.com
                          </div>
                        )}

                        {/* Submit */}
                        <Button
                          variant="primary"
                          size="lg"
                          className="w-full"
                          type="submit"
                          disabled={submitStatus === 'submitting'}
                        >
                          {submitStatus === 'submitting' ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-snow/40 text-xs text-center">
                          Submitting will open your email client pre-filled with your details.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </Reveal>

              {/* ── SIDEBAR ──────────────────────────────────────────────── */}
              <div className="space-y-5">

                {/* Direct Email Cards */}
                {EMAILS.map((em, i) => (
                  <Reveal key={em.address} delay={0.1 + i * 0.1}>
                    <motion.a
                      href={`mailto:${em.address}`}
                      className="block"
                      whileHover={{ y: -3 }}
                    >
                      <GlassCard className="hover:border-honolulu/50 transition-colors !p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-snow font-bold text-sm">{em.label}</div>
                            <div className="text-snow/50 text-xs mb-1">{em.role}</div>
                            <div className="text-robin text-xs font-mono break-all">{em.address}</div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.a>
                  </Reveal>
                ))}

                {/* Info Card */}
                <Reveal delay={0.3}>
                  <GlassCard className="!p-5">
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-robin/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-robin" />
                        </div>
                        <div>
                          <div className="text-snow font-semibold text-sm">Location</div>
                          <div className="text-snow/60 text-xs leading-relaxed">Based in Pakistan · Working Globally</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-honolulu/20 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4 text-honolulu" />
                        </div>
                        <div>
                          <div className="text-snow font-semibold text-sm">Response Time</div>
                          <div className="text-snow/60 text-xs">Usually within 24–48 hours</div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Social */}
                <Reveal delay={0.35}>
                  <GlassCard className="!p-5">
                    <div className="text-snow/60 text-xs font-semibold uppercase tracking-wide mb-4">Connect</div>
                    <div className="flex gap-3">
                      <motion.a
                        href="https://www.linkedin.com/in/mutahir-muhammad235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-honolulu/20 border border-white/10 hover:border-honolulu/40 text-snow/70 hover:text-snow transition-all text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </motion.a>
                      <motion.a
                        href="https://github.com/mutahir-muhammad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-snow/70 hover:text-snow transition-all text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    </div>
                  </GlassCard>
                </Reveal>

                {/* Studio card */}
                <Reveal delay={0.4}>
                  <GlassCard className="!p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-snow font-bold text-sm">Ascenity.dev Studio</div>
                        <div className="text-snow/50 text-xs">Full-Lifecycle Venture Studio</div>
                      </div>
                    </div>
                    <p className="text-snow/60 text-xs leading-relaxed mb-4">
                      Engineering · Management · Marketing — we cover the complete journey from concept to market launch.
                    </p>
                    <div className="flex gap-2">
                      <Button to="/engine" variant="secondary" size="sm" className="flex-1 !text-xs">Engine</Button>
                      <Button to="/reliv" variant="secondary" size="sm" className="flex-1 !text-xs">Relivv</Button>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        dark
        tagline="Full-Lifecycle Venture Studio — Concept to Market."
        links={[
          { label: 'Services', href: '/#services' },
          { label: 'Ascenity Engine', href: '/engine' },
          { label: 'Relivv', href: '/reliv' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
    </div>
  )
}
