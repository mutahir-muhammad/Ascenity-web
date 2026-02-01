import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, Pill, Dumbbell, Brain, Sparkles, Zap, 
  LineChart, Cloud, Check, Apple, TrendingUp, 
  Github, Linkedin, Menu, X, ArrowRight
} from 'lucide-react'
import { Reveal, GlassCard, SectionHeader, Button, Footer } from '../components/ui'

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-b from-snow to-cloud">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-honolulu/10 via-transparent to-robin/10 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute -top-16 -right-16 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#027BCE" d="M43.8,-66.7C56.2,-60.7,65.4,-47.5,73.4,-33.2C81.4,-18.9,88.1,-3.6,86.4,10C84.8,23.6,74.7,35.6,63.2,46.7C51.8,57.8,38.9,67.9,24.1,73C9.2,78.1,-7.7,78.1,-22.3,72.7C-36.9,67.3,-49.2,56.6,-59.4,44.1C-69.6,31.6,-77.7,17.3,-79.3,1.6C-80.9,-14.1,-76,-31.1,-66.4,-44.1C-56.9,-57.1,-42.6,-66.2,-27.2,-71C-11.8,-75.7,4.7,-76.1,18.7,-72.4C32.6,-68.8,43.3,-61.2,43.8,-66.7Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-robin/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-px relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-24 pb-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <img src="/Relive Logo.png" alt="Reliv" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl shadow-soft" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-oxford">
                Reliv
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-oxford/90 mb-4">
              Your AI-Powered{' '}
              <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                Health Companion
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-oxford/80 max-w-xl leading-relaxed">
              Track medications, nutrition, and workouts all in one place. Get personalized AI insights to optimize your health journey with beautiful visualizations.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col xs:flex-row gap-4">
              <Button variant="primary" size="lg" href="#features">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-honolulu/30 bg-honolulu/5 text-honolulu font-bold">
                Coming Soon
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-honolulu"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Phone Mockup */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ rotate: -8, y: 20, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto w-[85%] xs:w-[75%] sm:w-[65%] lg:w-[90%] max-w-[320px] sm:max-w-[380px] aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] border-4 border-oxford/20 shadow-2xl bg-snow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-honolulu/10 via-transparent to-robin/10"></div>
            <div className="h-8 sm:h-10 w-32 sm:w-40 bg-oxford/90 rounded-b-2xl mx-auto" />
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-oxford text-sm sm:text-base">Today's Overview</h3>
                <span className="text-xs text-oxford/70 bg-emerald/20 px-2 py-1 rounded-full">7-day streak 🔥</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="rounded-xl p-2 sm:p-3 bg-white/70 border border-honolulu/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-oxford flex items-center gap-2">
                      <Pill className="w-3 h-3 sm:w-4 sm:h-4 text-honolulu" />
                      Medications
                    </span>
                    <span className="text-xs text-oxford/70">3 scheduled</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-robin"></div>
                  </div>
                </div>

                <div className="rounded-xl p-2 sm:p-3 bg-white/70 border border-emerald/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-oxford flex items-center gap-2">
                      <Apple className="w-3 h-3 sm:w-4 sm:h-4 text-emerald" />
                      Meals Logged
                    </span>
                    <span className="text-xs text-oxford/70">1,850 cal</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-emerald"></div>
                  </div>
                </div>

                <div className="rounded-xl p-2 sm:p-3 bg-white/70 border border-deep-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-oxford flex items-center gap-2">
                      <Dumbbell className="w-3 h-3 sm:w-4 sm:h-4 text-deep-cyan" />
                      Workouts
                    </span>
                    <span className="text-xs text-oxford/70">45 min</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-deep-cyan"></div>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 rounded-xl p-2 sm:p-3 bg-gradient-to-br from-honolulu/10 to-robin/10 border border-honolulu/20">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-honolulu" />
                  <span className="text-xs sm:text-sm font-semibold text-oxford">AI Insight</span>
                </div>
                <p className="text-xs text-oxford/70 italic">
                  "Great progress! Your consistency shows 85% better adherence to your health goals."
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

// Key Features Section
function KeyFeatures() {
  const features = [
    {
      icon: <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Medication Management',
      description: 'Track prescriptions with smart reminders. Scan prescriptions with OCR technology.',
      gradient: 'from-honolulu to-robin',
      details: ['Smart reminders', 'OCR scanner', 'Medication history', 'Interaction warnings']
    },
    {
      icon: <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Nutrition Tracking',
      description: 'Log meals with macro tracking. Pre-built meal plans for various dietary needs.',
      gradient: 'from-emerald to-teal-shimmer',
      details: ['Calorie tracking', 'Macro breakdown', 'Meal plans', 'Food diary']
    },
    {
      icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Workout Logger',
      description: 'Track exercises with detailed metrics. Follow or create workout plans.',
      gradient: 'from-deep-cyan to-robin',
      details: ['Exercise library', 'Workout plans', 'Progress tracking', 'Active mode']
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'AI Health Assistant',
      description: 'Chat with your AI companion for personalized health insights.',
      gradient: 'from-robin to-teal-shimmer',
      details: ['24/7 availability', 'Personalized advice', 'Pattern detection', 'Context-aware']
    },
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Visual Analytics',
      description: 'Beautiful charts and graphs show your progress with actionable insights.',
      gradient: 'from-honolulu to-teal-shimmer',
      details: ['Weekly trends', 'Calorie balance', 'Health score', 'Custom dashboards']
    },
    {
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Offline-First Design',
      description: 'Works seamlessly without internet. Data syncs automatically when online.',
      gradient: 'from-phthalo to-deep-cyan',
      details: ['No internet required', 'Local storage', 'Auto-sync', 'Fast performance']
    }
  ]

  return (
    <section id="features" className="section-py bg-snow">
      <div className="container-px">
        <SectionHeader 
          title="Everything You Need for Complete Health Tracking"
          subtitle="Reliv brings together all aspects of your health journey in one beautifully designed, easy-to-use application."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <motion.div
                className="h-full p-5 sm:p-6 rounded-2xl border border-oxford/10 bg-white hover:shadow-lg hover:border-honolulu/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 shadow-soft`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-oxford mb-2">{feature.title}</h3>
                <p className="text-oxford/70 mb-4 text-sm sm:text-base">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-oxford/70">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-honolulu flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Log Your Health Data',
      description: 'Quickly add medications, meals, and workouts with our intuitive interface.',
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      gradient: 'from-honolulu to-robin'
    },
    {
      number: 2,
      title: 'Track Your Progress',
      description: 'View real-time updates on your dashboard with beautiful visualizations.',
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      gradient: 'from-robin to-deep-cyan'
    },
    {
      number: 3,
      title: 'Get AI Insights',
      description: 'Receive personalized recommendations based on your patterns and goals.',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      gradient: 'from-deep-cyan to-teal-shimmer'
    },
    {
      number: 4,
      title: 'Optimize & Thrive',
      description: 'Make informed decisions with data-driven insights and build healthier habits.',
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      gradient: 'from-emerald to-teal-shimmer'
    }
  ]

  return (
    <section id="how-it-works" className="section-py bg-oxford">
      <div className="container-px">
        <SectionHeader 
          dark
          title="How Reliv Works"
          subtitle="Four simple steps to transform your health tracking experience"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <GlassCard dark className="text-center h-full">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                  {step.icon}
                </div>
                <div className="text-robin text-xs sm:text-sm font-bold mb-2">STEP {step.number}</div>
                <h3 className="text-lg sm:text-xl font-bold text-snow mb-3">{step.title}</h3>
                <p className="text-snow/70 text-sm sm:text-base">{step.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Design Showcase Section
function DesignShowcase() {
  return (
    <section className="section-py bg-gradient-to-b from-cloud to-snow">
      <div className="container-px">
        <SectionHeader 
          title="Beautiful by Design"
          subtitle="Reliv features a stunning ocean-themed design with a sophisticated teal-to-cyan color palette"
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <Reveal>
            <GlassCard dark={false} className="h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-oxford mb-6">Design Principles</h3>
              <div className="space-y-4">
                {[
                  { icon: <Sparkles className="w-4 h-4 text-honolulu" />, title: 'Minimal & Flat', desc: 'No shadows, completely flat design for modern aesthetics' },
                  { icon: <Heart className="w-4 h-4 text-robin" />, title: 'Ocean-Inspired', desc: 'Cool, calming color palette with ocean depth vibes' },
                  { icon: <Zap className="w-4 h-4 text-deep-cyan" />, title: 'Delightful Interactions', desc: 'Smooth animations and haptic feedback enhance experience' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-oxford/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-oxford">{item.title}</div>
                      <div className="text-oxford/70 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard dark={false} className="h-full bg-gradient-to-br from-white to-honolulu/5">
              <h3 className="text-xl sm:text-2xl font-bold text-oxford mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { name: 'Honolulu Blue', color: 'bg-honolulu', hex: '#027BCE' },
                  { name: 'Teal Shimmer', color: 'bg-teal-shimmer', hex: '#2DD4BF' },
                  { name: 'Robin Cyan', color: 'bg-robin', hex: '#1CCAD8' },
                  { name: 'Deep Cyan', color: 'bg-deep-cyan', hex: '#0891B2' },
                ].map((item) => (
                  <div key={item.name} className={`p-3 sm:p-4 rounded-xl ${item.color} text-white text-center`}>
                    <div className="font-bold text-sm sm:text-base">{item.name}</div>
                    <div className="text-xs sm:text-sm opacity-90">{item.hex}</div>
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

// Tech Stack Section
function TechStack() {
  const tech = [
    { name: 'Flutter', description: 'Cross-platform framework for Android development' },
    { name: 'Hive', description: 'Fast, offline-first local database' },
    { name: 'Supabase', description: 'Backend for authentication and cloud sync' },
    { name: 'ML Kit', description: 'OCR for prescription scanning' },
    { name: 'Material 3', description: 'Modern design language' },
    { name: 'Notifications', description: 'Smart medication reminders' }
  ]

  return (
    <section className="section-py bg-snow">
      <div className="container-px">
        <SectionHeader 
          title="Built with Modern Technology"
          subtitle="Reliv leverages cutting-edge technologies to deliver a fast, reliable experience"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {tech.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <div className="p-4 sm:p-5 rounded-xl border border-oxford/10 bg-white hover:border-honolulu/20 transition-colors">
                <h4 className="font-bold text-oxford mb-1 sm:mb-2">{item.name}</h4>
                <p className="text-xs sm:text-sm text-oxford/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
function TeamSection() {
  const team = [
    { initials: 'MM', name: 'Muhammad Mutahir', role: 'Founder & Lead Developer', github: 'https://github.com/mutahir-muhammad/', gradient: 'from-honolulu to-robin' },
    { initials: 'MS', name: 'Muhammad Sudais', role: 'Developer', github: 'https://github.com/Sudais43', gradient: 'from-robin to-deep-cyan' },
    { initials: 'KM', name: 'Khawar Mehmood', role: 'Developer', github: 'https://github.com/khawar2000-gif', gradient: 'from-deep-cyan to-emerald' },
    { initials: 'ZA', name: 'ZainUlAbideen', role: 'Developer', github: null, gradient: 'from-emerald to-teal-shimmer' },
  ]

  return (
    <section className="section-py bg-gradient-to-b from-cloud to-snow">
      <div className="container-px">
        <SectionHeader 
          title="Meet the Team"
          subtitle="The passionate individuals building Reliv"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              {member.github ? (
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 sm:p-6 rounded-2xl border border-oxford/10 bg-white text-center hover:border-honolulu/30 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-xl sm:text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-oxford mb-1">{member.name}</h3>
                  <p className="text-oxford/70 text-xs sm:text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center">
                    <Github className="w-5 h-5 text-oxford/50" />
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  className="p-5 sm:p-6 rounded-2xl border border-oxford/10 bg-white text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-xl sm:text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-oxford mb-1">{member.name}</h3>
                  <p className="text-oxford/70 text-xs sm:text-sm">{member.role}</p>
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section id="cta" className="section-py bg-gradient-to-br from-honolulu/10 via-snow to-robin/10">
      <div className="container-px text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-oxford mb-4 text-balance">
            Ready to Transform Your Health Journey?
          </h2>
          <p className="text-lg sm:text-xl text-oxford/70 max-w-2xl mx-auto mb-8">
            Join the waitlist to be notified when Reliv launches on Google Play
          </p>
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-honolulu to-robin text-white font-bold rounded-xl shadow-soft"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Coming Soon</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

// Custom Footer for Reliv
function RelivFooter() {
  return (
    <footer className="bg-oxford border-t border-white/10">
      <div className="container-px py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <Link to="/reliv" className="flex items-center gap-2 font-extrabold text-xl mb-4">
              <img src="/Relive Logo.png" alt="Reliv" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
              <span className="text-snow">Reliv</span>
            </Link>
            <p className="text-sm text-snow/70">AI-Powered Health Companion</p>
            <p className="mt-2 text-sm text-snow/50">
              by{' '}
              <Link to="/" className="text-robin hover:underline">
                Ascenity
              </Link>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-snow/80 hover:text-snow transition">
              ← Back to Ascenity
            </Link>
            <Link to="/engine" className="text-snow/80 hover:text-snow transition">
              Ascenity Engine
            </Link>
            <Link to="/contact" className="text-snow/80 hover:text-snow transition">
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-4 sm:justify-end">
            <a
              href="https://github.com/mutahir-muhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-robin/20 text-snow transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mutahir-muhammad235/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-robin/20 text-snow transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-snow/50 text-center text-sm">
          © {new Date().getFullYear()} Ascenity.dev. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Main Export
export default function Reliv() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
  ]
  
  return (
    <div className="bg-snow">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-snow/80 border-b border-oxford/10">
        <div className="container-px flex items-center justify-between h-16 sm:h-18">
          <Link to="/reliv" className="font-extrabold text-oxford flex items-center gap-2">
            <img src="/Relive Logo.png" alt="Reliv" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            <span>Reliv</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-oxford/80">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-oxford transition font-medium">
                {link.label}
              </a>
            ))}
            <Link to="/engine" className="hover:text-oxford transition font-medium">Engine</Link>
            <Link to="/" className="hover:text-oxford transition font-medium">Ascenity</Link>
            <Button variant="primary" size="sm" href="#cta">
              Coming Soon
            </Button>
          </nav>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-oxford/5 text-oxford"
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
                className="fixed inset-0 bg-oxford/20 backdrop-blur-sm z-40 md:hidden"
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
                <div className="mx-3 rounded-2xl border border-oxford/10 bg-snow shadow-float overflow-hidden">
                  <div className="flex flex-col py-2">
                    {navLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 text-oxford/90 hover:bg-oxford/5 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Link 
                      to="/engine" 
                      className="px-4 py-3 text-oxford/90 hover:bg-oxford/5 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      Ascenity Engine
                    </Link>
                    <Link 
                      to="/" 
                      className="px-4 py-3 text-oxford/90 hover:bg-oxford/5 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      Ascenity.dev
                    </Link>
                    <div className="px-3 pt-2 pb-3">
                      <a 
                        href="#cta" 
                        onClick={() => setMobileOpen(false)} 
                        className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-honolulu to-robin text-white font-bold"
                      >
                        Coming Soon
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
        <KeyFeatures />
        <HowItWorks />
        <DesignShowcase />
        <TechStack />
        <TeamSection />
        <CTA />
      </main>

      {/* Footer */}
      <RelivFooter />
    </div>
  )
}
