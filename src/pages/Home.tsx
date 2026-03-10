import { motion } from 'framer-motion'
import {
  Sparkles, ArrowRight, Cpu, Heart, LineChart, Shield, Zap,
  Mail, Rocket, Gauge, Eye, Target,
  Users, Code, Accessibility, ChevronDown,
  FileText, TrendingUp, Megaphone, Building2, BarChart3,
  CheckCircle2, Star, Globe
} from 'lucide-react'
import { Navigation, Footer, Reveal, Button, GlassCard, SectionHeader } from '../components/ui'

const navLinks = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '/contact' },
]

// ─── PIPELINE STEPS ───────────────────────────────────────────────────────────
const pipeline = [
  { icon: <Target className="w-5 h-5" />, step: '01', label: 'Concept', desc: 'Requirements elicitation, SRS & strategy docs' },
  { icon: <Code className="w-5 h-5" />, step: '02', label: 'Build', desc: 'Full-stack engineering & scalable architecture' },
  { icon: <Megaphone className="w-5 h-5" />, step: '03', label: 'Launch', desc: 'AI video, copywriting & digital marketing' },
  { icon: <TrendingUp className="w-5 h-5" />, step: '04', label: 'Scale', desc: 'SEO, performance tuning & growth analytics' },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const engineeringServices = [
  'React Native Mobile Ecosystems',
  'Scalable Health-Tech UI (ShifaOne)',
  'Azure & Firebase Data Integration',
  'Next.js & Full-Stack Web Apps',
  'Performance Optimization (sub-100 ms)',
  'Accessible, WCAG 2.1-Compliant UI',
]

const managementServices = [
  'Professional Requirements Elicitation',
  'Software Requirements Specification (SRS)',
  'Software Design Documents (SDD)',
  'Technical Project Documentation (TPD)',
  'SDLC Planning & Sprint Management',
  'Stakeholder Communication Frameworks',
]

const marketingServices = [
  'Technical Scriptwriting & Copywriting',
  'AI-Driven Video Production',
  'Professional Voiceovers & Demos',
  'Digital Marketing Campaigns',
  'SEO Strategy & Keyword Architecture',
  'Brand Identity & Content Systems',
]

// ─── STATS ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '2,700+', label: 'Active Users Served' },
  { value: '3', label: 'Studio Pillars' },
  { value: '100%', label: 'Concept-to-Market' },
  { value: '< 100ms', label: 'Target Response Time' },
]

export default function Home() {
  return (
    <div className="bg-oxford min-h-screen">
      <Navigation
        dark
        links={navLinks}
        cta={{ label: 'Start a Project', href: '/contact' }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-robin/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-honolulu/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-phthalo/5 rounded-full blur-[80px]" />
        </div>

        <div className="container-px relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/10 border border-robin/30 mb-6">
                  <Building2 className="w-4 h-4 text-robin" />
                  <span className="text-robin text-sm font-semibold tracking-wide">Full-Lifecycle Venture Studio</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-snow mb-6 leading-[1.08]">
                  We Engineer,{' '}
                  <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                    Launch & Market
                  </span>
                  {' '}Your Digital Venture.
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg sm:text-xl lg:text-2xl text-snow/70 max-w-xl mx-auto lg:mx-0 mb-3 leading-relaxed">
                  <span className="text-robin font-semibold">Ascenity.dev</span> is your Concept-to-Market pipeline — blending technical excellence with market readiness.
                </p>
                <p className="text-base text-snow/50 max-w-lg mx-auto lg:mx-0 mb-8">
                  Engineering · Management Strategy · Creative Marketing — all under one roof.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button href="#services" variant="primary" size="lg">
                    Explore Studio
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button to="/contact" variant="outline" size="lg">
                    Start a Project
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8">
                  {['Pakistan-Based', 'Global Clients', 'Health-Tech Focused'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-snow/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-robin" />
                      {t}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Visual — orbital rings */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Reveal delay={0.2}>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-robin/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-10 rounded-full border border-honolulu/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-20 rounded-full border border-robin/15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-honolulu via-robin to-teal-shimmer shadow-glow-lg flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  {[
                    { label: 'Eng', color: 'bg-honolulu', delay: 0, angle: 0 },
                    { label: 'Mgt', color: 'bg-robin', delay: 0.5, angle: 120 },
                    { label: 'Mkt', color: 'bg-emerald', delay: 1, angle: 240 },
                  ].map(({ label, color, delay, angle }) => {
                    const rad = (angle * Math.PI) / 180
                    const r = 45
                    const x = 50 + r * Math.cos(rad)
                    const y = 50 + r * Math.sin(rad)
                    return (
                      <motion.div
                        key={label}
                        className={`absolute flex items-center justify-center w-12 h-12 rounded-full ${color}/20 border border-white/20 text-snow text-xs font-bold backdrop-blur-sm`}
                        style={{ left: `calc(${x}% - 24px)`, top: `calc(${y}% - 24px)` }}
                        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, delay }}
                      >
                        {label}
                      </motion.div>
                    )
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#studio" className="flex flex-col items-center gap-2 text-snow/40 hover:text-snow/70 transition-colors">
            <span className="text-xs hidden sm:block tracking-widest uppercase">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-oxford/80 backdrop-blur-sm">
        <div className="container-px py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-snow/50 text-sm mt-1">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO DNA ──────────────────────────────────────────────────────── */}
      <section id="studio" className="section-py bg-oxford">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Studio DNA"
              title="Your Concept-to-Market Pipeline"
              subtitle="We don't just write code — we build businesses. Every engagement covers the full lifecycle from idea validation to market traction."
            />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {pipeline.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative group">
                  {i < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-robin/40 to-transparent z-10 translate-x-4" />
                  )}
                  <GlassCard className="h-full group-hover:border-honolulu/50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mb-4 text-white">
                      {p.icon}
                    </div>
                    <div className="text-robin/60 text-xs font-bold tracking-widest uppercase mb-1">{p.step}</div>
                    <h3 className="text-lg font-bold text-snow mb-2">{p.label}</h3>
                    <p className="text-snow/60 text-sm leading-relaxed">{p.desc}</p>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal delay={0}>
              <GlassCard className="md:col-span-2 h-full hover:border-honolulu/50 transition-colors">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-snow mb-2">Mission</h3>
                    <p className="text-snow/70 leading-relaxed">
                      Bridge the gap between technical excellence and market readiness. We partner with ambitious founders to transform ideas into products people actually love — and find.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="h-full hover:border-honolulu/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-robin/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-robin" />
                </div>
                <h3 className="text-lg font-bold text-snow mb-2">Live Impact</h3>
                <p className="text-snow/70 text-sm leading-relaxed">
                  Powering <span className="text-robin font-semibold">ETL Online</span> (2,700+ users) &amp; scaling <span className="text-robin font-semibold">Shifaone</span> health-tech.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.15}>
              <GlassCard className="h-full hover:border-honolulu/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-honolulu/20 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-honolulu" />
                </div>
                <h3 className="text-lg font-bold text-snow mb-2">Vision</h3>
                <p className="text-snow/70 text-sm leading-relaxed">
                  Become the premier Venture Studio for health-tech &amp; deep-tech startups across South Asia and beyond.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES — THREE PILLARS ────────────────────────────────────────── */}
      <section id="services" className="section-py bg-gradient-to-b from-oxford to-[#071828]">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Services"
              title="Three Pillars. One Studio."
              subtitle="Engineering, Management, and Marketing — expertly woven together so your product reaches its full potential."
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Pillar 1: Engineering */}
            <Reveal delay={0}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-3xl p-7 h-full hover:border-honolulu/60 transition-all duration-300 flex flex-col"
                whileHover={{ y: -6 }}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-honolulu/60 via-robin/40 to-transparent rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honolulu/15 border border-honolulu/30 mb-3 self-start">
                  <span className="text-honolulu text-xs font-bold tracking-wide uppercase">Pillar 01</span>
                </div>
                <h3 className="text-2xl font-extrabold text-snow mb-2">Engineering &amp; Architecture</h3>
                <p className="text-snow/60 text-sm mb-6 leading-relaxed">
                  From mobile ecosystems to cloud-native backends — we architect for performance, scale, and long-term maintainability.
                </p>
                <ul className="space-y-2.5 flex-1">
                  {engineeringServices.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-snow/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-honolulu flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['React Native', 'Next.js', 'Azure', 'Firebase', 'TypeScript'].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-honolulu/10 text-honolulu text-xs rounded-full border border-honolulu/20">{t}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            {/* Pillar 2: Management */}
            <Reveal delay={0.1}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-3xl p-7 h-full hover:border-robin/60 transition-all duration-300 flex flex-col"
                whileHover={{ y: -6 }}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-robin/60 via-teal-shimmer/40 to-transparent rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-robin to-teal-shimmer flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-robin/15 border border-robin/30 mb-3 self-start">
                  <span className="text-robin text-xs font-bold tracking-wide uppercase">Pillar 02</span>
                </div>
                <h3 className="text-2xl font-extrabold text-snow mb-2">Management &amp; Strategy</h3>
                <p className="text-snow/60 text-sm mb-6 leading-relaxed">
                  Professional documentation and SDLC governance so your product is built right — from requirements through delivery.
                </p>
                <ul className="space-y-2.5 flex-1">
                  {managementServices.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-snow/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-robin flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['SRS', 'SDD', 'TPD', 'Agile', 'Scrum'].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-robin/10 text-robin text-xs rounded-full border border-robin/20">{t}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            {/* Pillar 3: Marketing */}
            <Reveal delay={0.2}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-3xl p-7 h-full hover:border-emerald/60 transition-all duration-300 flex flex-col"
                whileHover={{ y: -6 }}
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-emerald/60 via-teal-shimmer/40 to-transparent rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald to-teal-shimmer flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Megaphone className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/15 border border-emerald/30 mb-3 self-start">
                  <span className="text-emerald text-xs font-bold tracking-wide uppercase">Pillar 03</span>
                </div>
                <h3 className="text-2xl font-extrabold text-snow mb-2">Creative Marketing Agency</h3>
                <p className="text-snow/60 text-sm mb-6 leading-relaxed">
                  AI-powered video demos to SEO campaigns — we make sure your product gets found, seen, and chosen.
                </p>
                <ul className="space-y-2.5 flex-1">
                  {marketingServices.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-snow/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['SEO', 'AI Video', 'Voiceover', 'Copywriting', 'Analytics'].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-emerald/10 text-emerald text-xs rounded-full border border-emerald/20">{t}</span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Bottom accent row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Reveal delay={0.05}>
              <GlassCard className="flex items-center gap-4 hover:border-honolulu/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-snow font-bold">Performance-First</div>
                  <div className="text-snow/60 text-sm">60 FPS · sub-100 ms API</div>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="flex items-center gap-4 hover:border-robin/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-robin to-teal-shimmer flex items-center justify-center flex-shrink-0">
                  <Accessibility className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-snow font-bold">Fully Accessible</div>
                  <div className="text-snow/60 text-sm">WCAG 2.1 AA · Inclusive Design</div>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.15}>
              <GlassCard className="flex items-center gap-4 hover:border-emerald/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald to-teal-shimmer flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-snow font-bold">Data-Driven SEO</div>
                  <div className="text-snow/60 text-sm">Keyword Strategy · Analytics</div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP PRODUCTS ─────────────────────────────────────────────── */}
      <section id="products" className="section-py bg-[#071828]">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Flagship Products"
              title="Built In-House. Proven in the Market."
              subtitle="Our proprietary products demonstrate everything we offer clients — performance, accessibility, and marketability."
            />
          </Reveal>

          {/* Ascenity Engine */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honolulu/20 text-honolulu text-xs font-semibold uppercase tracking-wide mb-4">
                  Proprietary Core Framework
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-snow mb-4">Ascenity Engine</h3>
                <p className="text-lg text-snow/70 mb-6 leading-relaxed">
                  Our proprietary high-performance core — a battle-tested framework powering intelligent journaling and emotional pattern tracking with AI-powered insights.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: <LineChart className="w-5 h-5" />, text: 'Emotional Granularity Tracking', color: 'text-robin' },
                    { icon: <Cpu className="w-5 h-5" />, text: 'AI-Powered Insights Engine', color: 'text-robin' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Privacy-First Architecture', color: 'text-robin' },
                    { icon: <Gauge className="w-5 h-5" />, text: 'Sub-100ms Response Optimization', color: 'text-robin' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-snow/70">
                      <span className={item.color}>{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Firebase', 'Ascenity Engine', 'TypeScript'].map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded border border-white/10">{t}</span>
                  ))}
                </div>
                <Button to="/engine" variant="primary">
                  Explore Engine <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-honolulu to-robin shadow-glow-lg">
                  <div className="bg-oxford rounded-3xl p-8 sm:p-12 w-full max-w-md aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mb-4 shadow-glow">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-snow font-bold mb-1">Ascenity Engine</p>
                      <p className="text-snow/50 text-sm">Core Framework</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Relivv */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="flex justify-center order-1">
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-robin to-emerald shadow-glow-lg">
                  <div className="bg-oxford rounded-3xl p-8 sm:p-12 w-full max-w-md aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-glow mb-4">
                        <img src="/Relive Logo.png" alt="Relivv Health App" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-snow font-bold mb-1">Relivv</p>
                      <p className="text-snow/50 text-sm">Health-Tech Application</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-robin/20 text-robin text-xs font-semibold uppercase tracking-wide mb-4">
                  Health-Tech · Multi-User Profiling
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-snow mb-4">Relivv</h3>
                <p className="text-lg text-snow/70 mb-6 leading-relaxed">
                  A sophisticated health-tracking application featuring multi-user profiling, accessible data visualizations, and AI-powered health recommendations for families.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: <Heart className="w-5 h-5" />, text: 'Comprehensive Health Data Tracking', color: 'text-emerald' },
                    { icon: <Users className="w-5 h-5" />, text: 'Multi-Member Family Profiling', color: 'text-emerald' },
                    { icon: <Eye className="w-5 h-5" />, text: 'Accessible Data Visualizations', color: 'text-emerald' },
                    { icon: <Zap className="w-5 h-5" />, text: 'Offline-First Architecture', color: 'text-emerald' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-snow/70">
                      <span className={item.color}>{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Azure Cosmos DB', 'Firebase', 'TypeScript'].map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded border border-white/10">{t}</span>
                  ))}
                </div>
                <Button to="/reliv" variant="primary">
                  Explore Relivv <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM / STUDIO ─────────────────────────────────────────────────── */}
      <section className="section-py bg-gradient-to-b from-[#071828] to-oxford">
        <div className="container-px max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader
              dark
              overline="The Studio"
              title="Driven by Builders Who Ship"
              subtitle="Senior engineers, strategists, and creatives working together to take your venture from zero to market."
            />
          </Reveal>
          <div className="flex justify-center">
            <Reveal delay={0.1}>
              <motion.div
                className="bg-oxford/90 backdrop-blur-md border border-robin/30 rounded-3xl p-8 sm:p-12 text-center max-w-lg w-full shadow-xl hover:border-robin/60 transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-honolulu via-robin to-teal-shimmer mx-auto mb-6 flex items-center justify-center shadow-glow-lg">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">MM</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-snow mb-2">Muhammad Mutahir</h3>
                <p className="text-robin font-bold text-base mb-1">Founder · Lead Engineer · Creative Director</p>
                <p className="text-snow/50 text-sm mb-6">Senior SWE · Health-Tech Specialist · Pakistan</p>
                <p className="text-snow/70 text-base leading-relaxed px-4 mb-8">
                  7+ years building scalable applications. Leading tech at ETL Online, architecting Shifaone, and running Ascenity as a full-lifecycle studio.
                </p>
                <div className="flex justify-center gap-3">
                  <Button href="https://www.linkedin.com/in/mutahir-muhammad235/" variant="primary" size="sm">LinkedIn</Button>
                  <Button href="https://github.com/mutahir-muhammad" variant="outline" size="sm">GitHub</Button>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-oxford border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-robin/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-honolulu/5 rounded-full blur-[80px]" />
        </div>
        <div className="container-px relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/10 border border-robin/20 mb-6">
                <Rocket className="w-4 h-4 text-robin" />
                <span className="text-robin text-sm font-medium">Ready to launch your venture?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow mb-6 leading-tight">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                  Market-Ready.
                </span>
              </h2>
              <p className="text-lg text-snow/70 mb-10 leading-relaxed">
                From architecture review to launch marketing — Ascenity covers the full lifecycle. Your Concept-to-Market partner awaits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  <Mail className="w-5 h-5" />
                  Start a Project
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
              <p className="text-snow/40 text-sm mt-6">
                Mutahir328@gmail.com · mail.mhassank@gmail.com
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer
        dark
        tagline="Full-Lifecycle Venture Studio — Concept to Market."
        links={[
          { label: 'Services', href: '#services' },
          { label: 'Ascenity Engine', href: '/engine' },
          { label: 'Relivv', href: '/reliv' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
    </div>
  )
}
