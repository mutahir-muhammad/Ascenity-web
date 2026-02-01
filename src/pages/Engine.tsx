import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, Lock, LineChart, NotebookText, BrainCircuit, 
  Radar, Sparkles, Heart, Tags, Github, Linkedin, Menu, X,
  ArrowRight, Check, Brain, Shield, TrendingUp, Users
} from 'lucide-react'
import { Reveal, GlassCard, SectionHeader, Button, Footer } from '../components/ui'

// Store Badges Component
function StoreBadges() {
  return (
    <div className="flex flex-col xs:flex-row items-center gap-3 sm:gap-4">
      <Button variant="primary" size="lg" href="#get-started">
        Coming Soon
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-white"
        />
      </Button>
    </div>
  )
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-oxford">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-oxford via-oxford to-phthalo/30"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute -top-16 -right-16 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1ccad8" d="M43.8,-66.7C56.2,-60.7,65.4,-47.5,73.4,-33.2C81.4,-18.9,88.1,-3.6,86.4,10C84.8,23.6,74.7,35.6,63.2,46.7C51.8,57.8,38.9,67.9,24.1,73C9.2,78.1,-7.7,78.1,-22.3,72.7C-36.9,67.3,-49.2,56.6,-59.4,44.1C-69.6,31.6,-77.7,17.3,-79.3,1.6C-80.9,-14.1,-76,-31.1,-66.4,-44.1C-56.9,-57.1,-42.6,-66.2,-27.2,-71C-11.8,-75.7,4.7,-76.1,18.7,-72.4C32.6,-68.8,43.3,-61.2,43.8,-66.7Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-honolulu/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-px relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-24 pb-16">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/20 text-robin text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Mental Wellness Platform
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-snow leading-[1.1]">
              Understand Your Mind.{' '}
              <span className="bg-gradient-to-r from-robin to-honolulu bg-clip-text text-transparent">
                Reshape Your Well-being.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-snow/80 max-w-xl leading-relaxed">
              Ascenity Engine is your personal guide to emotional clarity. Through intelligent journaling and mood tracking, discover the patterns in your thoughts and feelings.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </Reveal>
        </div>

        {/* Phone Mockup */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ rotate: -8, y: 20, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto w-[85%] xs:w-[75%] sm:w-[65%] lg:w-[90%] max-w-[320px] sm:max-w-[380px] aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] border-4 border-snow/20 shadow-2xl bg-snow/95 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-robin/10 via-transparent to-honolulu/10"></div>
            <div className="h-8 sm:h-10 w-32 sm:w-40 bg-oxford/90 rounded-b-2xl mx-auto" />
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs text-oxford/70">
                <span className="w-2 h-2 rounded-full bg-emerald"></span>
                Quick Log
              </div>
              <h3 className="mt-2 font-bold text-oxford text-sm sm:text-base">Differentiate • Label • Reflect</h3>
              
              {/* Mood Trend Graph */}
              <div className="mt-3 sm:mt-4 rounded-xl p-2 sm:p-3 bg-white/70 border border-oxford/10">
                <div className="text-xs font-semibold text-oxford mb-2">Weekly Mood Trends</div>
                <div className="relative h-16 sm:h-20">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="mobileGraphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#027bce" />
                        <stop offset="50%" stopColor="#1ccad8" />
                        <stop offset="100%" stopColor="#0f4c81" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,70 L 16,55 L 33,58 L 50,42 L 66,48 L 83,35 L 100,28 L 100,100 L 0,100 Z"
                      fill="url(#mobileGraphGradient)"
                      opacity="0.15"
                    />
                    <path
                      d="M 0,70 L 16,55 L 33,58 L 50,42 L 66,48 L 83,35 L 100,28"
                      stroke="url(#mobileGraphGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-oxford/60 mt-1">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>
              
              <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-1.5 sm:gap-2">
                {["Joy", "Calm", "Anxious", "Tired"].map((mood) => (
                  <div key={mood} className="rounded-xl p-2 sm:p-3 bg-white/70 border border-oxford/10">
                    <div className="text-xs sm:text-sm font-semibold text-oxford">{mood}</div>
                    <div className="mt-1 h-1.5 sm:h-2 bg-oxford/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-honolulu"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

// Problem Section
function Problem() {
  const items = [
    { title: 'From Amorphous to Articulated', text: 'Transform vague "bad" into precise labels like disappointment, overwhelm, or envy.', icon: <Radar className="w-5 h-5 sm:w-6 sm:h-6 text-robin" /> },
    { title: 'Reveal Hidden Triggers', text: 'Link feelings to context — #work, #family, #sleep — to surface patterns.', icon: <Tags className="w-5 h-5 sm:w-6 sm:h-6 text-robin" /> },
    { title: 'Reflection with Feedback', text: 'Guided journaling and insights turn entries into growth-oriented feedback.', icon: <NotebookText className="w-5 h-5 sm:w-6 sm:h-6 text-robin" /> },
  ]
  return (
    <section id="challenge" className="section-py bg-snow">
      <div className="container-px">
        <SectionHeader 
          title="Feeling Overwhelmed is Normal. Staying Stuck Isn't." 
          subtitle="In a world of constant notifications and pressures, it's easy to lose touch with your inner self. Ascenity was created to be that space—a calm, non-intrusive sanctuary on your phone."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <GlassCard dark={false} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-robin/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-oxford">{item.title}</h3>
                </div>
                <p className="text-oxford/70 leading-relaxed">{item.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solution Section
function Solution() {
  return (
    <section id="solution" className="section-py bg-oxford">
      <div className="container-px">
        <SectionHeader
          dark
          title="Your Path to Self-Discovery, Simplified."
          subtitle="Most mood trackers are too simple. Most journals are too quiet. Ascenity bridges them with science-backed design."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <GlassCard dark className="h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-snow mb-3">Go Beyond 'Happy' or 'Sad'</h3>
              <p className="text-snow/80 mb-6">Emotional Granularity turns vague feeling into precise language — a learnable skill linked to resilience.</p>
              <div className="space-y-3">
                {[
                  { time: 'Monday morning', feeling: '"I feel overwhelmed"', cause: '3 deadline projects + lack of sleep' },
                  { time: 'Tuesday afternoon', feeling: '"I feel energized"', cause: 'Completed project + team appreciation' },
                  { time: 'Wednesday evening', feeling: '"I feel content"', cause: 'Quality time with family + good workout' },
                ].map((entry, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl bg-white/10 border border-white/5">
                    <div className="text-xs sm:text-sm text-snow/60 mb-1">{entry.time}</div>
                    <div className="font-semibold text-snow text-sm sm:text-base">{entry.feeling}</div>
                    <div className="text-xs text-snow/60 mt-1">Cause: {entry.cause}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard dark className="h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-snow mb-3">Connect Feelings to Life</h3>
              <p className="text-snow/80 mb-6">Affect labeling and context (tags like #work, #family) surface triggers you can act on.</p>
              <div className="space-y-3">
                {[
                  { mood: 'Anxious', tags: ['#work', '#deadline'], color: 'from-red-400 to-orange-400' },
                  { mood: 'Calm', tags: ['#family', '#walk'], color: 'from-emerald to-teal-400' },
                  { mood: 'Joyful', tags: ['#friends', '#music'], color: 'from-honolulu to-robin' },
                ].map((r, i) => (
                  <div key={i} className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 rounded-xl bg-white/10 p-3 sm:p-4 border border-white/5">
                    <div className="font-semibold text-snow">{r.mood}</div>
                    <div className="flex gap-2 flex-wrap">
                      {r.tags.map(t => (
                        <span key={t} className="px-2 py-1 rounded-full text-xs bg-robin/30 text-snow">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Science Section
function Science() {
  const [tab, setTab] = useState<'foundation' | 'process' | 'insight'>('foundation')
  
  const tabContent = {
    foundation: {
      title: "Emotional Granularity",
      description: "Transform vague feelings into precise language — a learnable skill linked to resilience.",
      items: [
        { before: '"I feel bad"', after: '"I feel disappointed because my expectations weren\'t met."' }
      ]
    },
    process: {
      title: "Affect Labeling",
      description: "Connect your feelings to life context with tags to surface triggers and patterns.",
      tags: ['#work', '#family', '#deadline', '#exercise', '#sleep']
    },
    insight: {
      title: "Insight Engine",
      description: "Visual dashboards and AI-assisted insights turn patterns into action.",
      features: ['Custom charts for personal relevance', 'Insight assistant, not therapist', 'Clinician-in-the-loop safeguards']
    }
  }
  
  return (
    <section id="science" className="section-py bg-snow relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-b from-robin/20 to-honolulu/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-b from-phthalo/20 to-oxford/10 blur-3xl" />
      
      <div className="container-px relative z-10">
        <SectionHeader 
          title="The Science Behind Ascenity" 
          subtitle="A deep-dive into the foundations, process, and insight engine powering emotional clarity." 
        />
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-oxford/10 bg-white/70 backdrop-blur-sm p-1">
            {[
              { id: 'foundation', label: 'Foundation' },
              { id: 'process', label: 'Process' },
              { id: 'insight', label: 'Insight' },
            ].map(t => (
              <button
                key={t.id}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all ${tab === t.id ? 'bg-honolulu text-white shadow-soft' : 'text-oxford/80 hover:bg-oxford/5'}`}
                onClick={() => setTab(t.id as any)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard dark className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-snow mb-4">{tabContent[tab].title}</h3>
              <p className="text-snow/80 text-lg mb-6">{tabContent[tab].description}</p>
              
              {tab === 'foundation' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/10 border border-red-400/30">
                    <div className="text-sm text-snow/60 mb-1">Before Ascenity</div>
                    <div className="text-snow font-semibold">"I feel bad"</div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-robin rotate-90" />
                  </div>
                  <div className="p-4 rounded-xl bg-emerald/20 border border-emerald/30">
                    <div className="text-sm text-snow/60 mb-1">With Ascenity</div>
                    <div className="text-snow font-semibold">"I feel disappointed because my expectations weren't met."</div>
                  </div>
                </div>
              )}
              
              {tab === 'process' && (
                <div className="flex flex-wrap justify-center gap-2">
                  {tabContent.process.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-robin/30 text-snow font-medium">{tag}</span>
                  ))}
                </div>
              )}
              
              {tab === 'insight' && (
                <div className="space-y-3">
                  {tabContent.insight.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                      <Check className="w-5 h-5 text-robin flex-shrink-0" />
                      <span className="text-snow">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    { icon: <Heart className="w-6 h-6" />, title: 'Mood Logging', description: 'Track emotions with granular labels and intensity levels.' },
    { icon: <NotebookText className="w-6 h-6" />, title: 'Smart Journaling', description: 'AI-guided prompts help you explore feelings deeper.' },
    { icon: <LineChart className="w-6 h-6" />, title: 'Pattern Insights', description: 'Visualize mood trends and identify triggers over time.' },
    { icon: <BrainCircuit className="w-6 h-6" />, title: 'CBT Techniques', description: 'Evidence-based exercises for emotional regulation.' },
    { icon: <Lock className="w-6 h-6" />, title: 'Private & Secure', description: 'Your data stays on your device. End-to-end encrypted sync.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Clinician Ready', description: 'Export reports to share with mental health professionals.' },
  ]
  
  return (
    <section id="features" className="section-py bg-oxford">
      <div className="container-px">
        <SectionHeader
          dark
          overline="Features"
          title="Everything You Need for Emotional Clarity"
          subtitle="Designed with care, backed by science, built for your journey."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-robin/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-robin to-honolulu flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-snow mb-2">{feature.title}</h3>
                <p className="text-snow/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Privacy Section
function Privacy() {
  return (
    <section id="privacy" className="section-py bg-snow">
      <div className="container-px">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <GlassCard dark={false} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-honolulu to-robin flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-oxford mb-4">Your Privacy, Our Priority</h2>
              <p className="text-lg text-oxford/70 mb-8 max-w-2xl mx-auto">
                Your emotional data is deeply personal. We've built Ascenity with privacy-first architecture.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Local-First', desc: 'Data stored on your device' },
                  { title: 'E2E Encrypted', desc: 'Optional cloud sync is encrypted' },
                  { title: 'No Ads', desc: 'We never sell your data' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-oxford/5">
                    <div className="font-bold text-oxford mb-1">{item.title}</div>
                    <div className="text-sm text-oxford/60">{item.desc}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  return (
    <section id="get-started" className="section-py bg-gradient-to-br from-oxford via-phthalo/80 to-oxford">
      <div className="container-px text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow mb-6 text-balance">
            Ready to Understand Your Mind?
          </h2>
          <p className="text-lg sm:text-xl text-snow/80 mb-8 max-w-2xl mx-auto">
            Join thousands who are building emotional resilience with Ascenity Engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" to="/">
              Back to Ascenity
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Scroll Progress Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-honolulu via-robin to-emerald origin-left z-50" 
      style={{ scaleX }} 
    />
  )
}

// Main Export
export default function Engine() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#challenge', label: 'Challenge' },
    { href: '#solution', label: 'Solution' },
    { href: '#science', label: 'Science' },
    { href: '#features', label: 'Features' },
    { href: '#privacy', label: 'Privacy' },
  ]

  return (
    <div className="bg-oxford text-snow">
      <ScrollProgress />
      
      {/* Navigation */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="container-px flex items-center justify-between h-16 sm:h-18">
          <Link to="/" className="font-extrabold text-snow flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-robin" />
            <span className="hidden xs:inline">Ascenity Engine</span>
            <span className="xs:hidden">Engine</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-snow/80">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-snow transition font-medium">
                {link.label}
              </a>
            ))}
            <Link to="/reliv" className="hover:text-snow transition font-medium">Reliv</Link>
            <Button variant="primary" size="sm" href="#get-started">
              Get Started
            </Button>
          </nav>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-snow"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                key="overlay"
                className="fixed inset-0 bg-oxford/80 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                key="sheet"
                className="fixed top-16 left-0 right-0 z-50 md:hidden"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="mx-3 rounded-2xl border border-robin/20 bg-oxford/95 backdrop-blur-md shadow-float overflow-hidden">
                  <div className="flex flex-col py-2">
                    {navLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 text-snow/90 hover:bg-white/10 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Link 
                      to="/reliv" 
                      className="px-4 py-3 text-snow/90 hover:bg-white/10 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      Reliv
                    </Link>
                    <div className="px-3 pt-2 pb-3">
                      <a 
                        href="#get-started" 
                        onClick={() => setMobileOpen(false)} 
                        className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-honolulu to-robin text-white font-bold"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Science />
        <Features />
        <Privacy />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer 
        links={[
          { label: 'Back to Ascenity', href: '/' },
          { label: 'Reliv', href: '/reliv' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
    </div>
  )
}
