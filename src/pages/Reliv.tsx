import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, Pill, Dumbbell, Brain, Sparkles, Shield, Zap, 
  Calendar, LineChart, Bell, Camera, Cloud, Check, 
  Activity, Apple, TrendingUp, Github, Linkedin, 
  ArrowRight, ChevronDown, Menu, X
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('show')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-cloud to-snow">
      <div className="absolute inset-0 bg-gradient-to-br from-honolulu/10 via-transparent to-robin/10 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute -top-16 -right-16 w-[520px] h-[520px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#027BCE" d="M43.8,-66.7C56.2,-60.7,65.4,-47.5,73.4,-33.2C81.4,-18.9,88.1,-3.6,86.4,10C84.8,23.6,74.7,35.6,63.2,46.7C51.8,57.8,38.9,67.9,24.1,73C9.2,78.1,-7.7,78.1,-22.3,72.7C-36.9,67.3,-49.2,56.6,-59.4,44.1C-69.6,31.6,-77.7,17.3,-79.3,1.6C-80.9,-14.1,-76,-31.1,-66.4,-44.1C-56.9,-57.1,-42.6,-66.2,-27.2,-71C-11.8,-75.7,4.7,-76.1,18.7,-72.4C32.6,-68.8,43.3,-61.2,43.8,-66.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-10 items-center pt-20 pb-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <img src="/Relive Logo.png" alt="Reliv" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl" />
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-oxford">
                Reliv
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-oxford/90 mb-4">
              Your AI-Powered Health Companion
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl text-oxford/80 max-w-xl leading-relaxed">
              Track medications, nutrition, and workouts all in one place. Get personalized AI insights to optimize your health journey with beautiful visualizations and real-time progress tracking.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-honolulu to-robin text-white font-bold rounded-xl shadow-soft flex items-center justify-center gap-2 hover:shadow-float transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.div
                className="px-8 py-4 bg-white border-2 border-honolulu text-honolulu font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(2, 123, 206, 0.05)' }}
              >
                Coming Soon to Google Play
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-honolulu"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <motion.div
            initial={{ rotate: -8, y: 20, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto w-[90%] max-w-[380px] aspect-[9/19] rounded-[2.5rem] border-4 border-oxford/90 shadow-2xl bg-snow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-honolulu/10 via-transparent to-robin/10"></div>
            <div className="h-10 w-40 bg-oxford/90 rounded-b-2xl mx-auto" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-oxford">Today's Overview</h3>
                <span className="text-xs text-oxford/70 bg-emerald/20 px-2 py-1 rounded-full">7-day streak 🔥</span>
              </div>
              
              <div className="space-y-3">
                <div className="rounded-xl p-3 bg-white/70 border border-honolulu/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-oxford flex items-center gap-2">
                      <Pill className="w-4 h-4 text-honolulu" />
                      Medications
                    </span>
                    <span className="text-xs text-oxford/70">3 scheduled</span>
                  </div>
                  <div className="h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-robin"></div>
                  </div>
                </div>

                <div className="rounded-xl p-3 bg-white/70 border border-emerald/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-oxford flex items-center gap-2">
                      <Apple className="w-4 h-4 text-emerald" />
                      Meals Logged
                    </span>
                    <span className="text-xs text-oxford/70">1,850 cal</span>
                  </div>
                  <div className="h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-emerald"></div>
                  </div>
                </div>

                <div className="rounded-xl p-3 bg-white/70 border border-deep-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-oxford flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-deep-cyan" />
                      Workouts
                    </span>
                    <span className="text-xs text-oxford/70">45 min</span>
                  </div>
                  <div className="h-2 bg-oxford/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-deep-cyan"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl p-3 bg-gradient-to-br from-honolulu/10 to-robin/10 border border-honolulu/20">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-honolulu" />
                  <span className="text-sm font-semibold text-oxford">AI Insight</span>
                </div>
                <p className="text-xs text-oxford/70 italic">
                  "Great progress! Your consistency this week shows 85% better adherence to your health goals."
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

function KeyFeatures() {
  const features = [
    {
      icon: <Pill className="w-6 h-6 text-white" />,
      title: 'Medication Management',
      description: 'Track prescriptions with smart reminders. Scan prescriptions with OCR technology for instant data entry.',
      gradient: 'from-honolulu to-robin',
      details: ['Smart reminders', 'OCR prescription scanner', 'Medication history', 'Interaction warnings']
    },
    {
      icon: <Apple className="w-6 h-6 text-white" />,
      title: 'Nutrition Tracking',
      description: 'Log meals with macro tracking. Pre-built meal plans for various dietary preferences.',
      gradient: 'from-emerald to-teal-shimmer',
      details: ['Calorie tracking', 'Macro breakdown', 'Meal plans', 'Food diary']
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      title: 'Workout Logger',
      description: 'Track exercises with detailed metrics. Follow pre-made workout plans or create your own.',
      gradient: 'from-deep-cyan to-robin',
      details: ['Exercise library', 'Workout plans', 'Progress tracking', 'Active workout mode']
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: 'AI Health Assistant',
      description: 'Chat with your AI companion for personalized health insights and recommendations.',
      gradient: 'from-robin to-teal-shimmer',
      details: ['24/7 availability', 'Personalized advice', 'Pattern detection', 'Context-aware responses']
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: 'Visual Analytics',
      description: 'Beautiful charts and graphs show your progress over time with actionable insights.',
      gradient: 'from-honolulu to-teal-shimmer',
      details: ['Weekly trends', 'Calorie balance', 'Health score', 'Custom dashboards']
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: 'Offline-First Design',
      description: 'Works seamlessly without internet. Data syncs automatically when online.',
      gradient: 'from-phthalo to-deep-cyan',
      details: ['No internet required', 'Local storage', 'Auto-sync', 'Fast performance']
    }
  ]

  return (
    <section id="features" className="py-24 bg-snow">
      <div className="container-px mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
              Everything You Need for Complete Health Tracking
            </h2>
            <p className="text-xl text-oxford/70 max-w-3xl mx-auto">
              Reliv brings together all aspects of your health journey in one beautifully designed, easy-to-use application.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <motion.div
                className="card rounded-2xl border border-oxford/10 bg-white p-6 h-full"
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 shadow-soft`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-oxford mb-2">{feature.title}</h3>
                <p className="text-oxford/70 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-oxford/70">
                      <Check className="w-4 h-4 text-honolulu flex-shrink-0" />
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

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Log Your Health Data',
      description: 'Quickly add medications, meals, and workouts with our intuitive interface. Use OCR to scan prescriptions instantly.',
      icon: <Heart className="w-8 h-8 text-white" />,
      gradient: 'from-honolulu to-robin'
    },
    {
      number: 2,
      title: 'Track Your Progress',
      description: 'View real-time updates on your dashboard. Visualize trends with beautiful charts and progress indicators.',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      gradient: 'from-robin to-deep-cyan'
    },
    {
      number: 3,
      title: 'Get AI Insights',
      description: 'Receive personalized recommendations from your AI health companion based on your patterns and goals.',
      icon: <Brain className="w-8 h-8 text-white" />,
      gradient: 'from-deep-cyan to-teal-shimmer'
    },
    {
      number: 4,
      title: 'Optimize & Thrive',
      description: 'Make informed decisions with data-driven insights. Build healthier habits and achieve your wellness goals.',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      gradient: 'from-emerald to-teal-shimmer'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-oxford text-snow">
      <div className="container-px mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              How Reliv Works
            </h2>
            <p className="text-xl text-snow/80 max-w-3xl mx-auto">
              Four simple steps to transform your health tracking experience
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="card rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                  {step.icon}
                </div>
                <div className="text-teal-shimmer text-sm font-bold mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-snow/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DesignShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-cloud to-snow">
      <div className="container-px mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
              Beautiful by Design
            </h2>
            <p className="text-xl text-oxford/70 max-w-3xl mx-auto">
              Reliv features a stunning ocean-themed design with a sophisticated teal-to-cyan color palette
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Reveal>
            <div className="card rounded-2xl border border-oxford/10 bg-white p-8">
              <h3 className="text-2xl font-bold text-oxford mb-6">Design Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-honolulu/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-honolulu" />
                  </div>
                  <div>
                    <div className="font-semibold text-oxford">Minimal & Flat</div>
                    <div className="text-oxford/70 text-sm">No shadows, completely flat design for modern aesthetics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-robin/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-robin" />
                  </div>
                  <div>
                    <div className="font-semibold text-oxford">Ocean-Inspired</div>
                    <div className="text-oxford/70 text-sm">Cool, calming color palette with ocean depth vibes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-deep-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-deep-cyan" />
                  </div>
                  <div>
                    <div className="font-semibold text-oxford">Delightful Interactions</div>
                    <div className="text-oxford/70 text-sm">Smooth animations and haptic feedback enhance experience</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card rounded-2xl border border-oxford/10 bg-gradient-to-br from-white to-honolulu/5 p-8">
              <h3 className="text-2xl font-bold text-oxford mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-honolulu text-white text-center">
                  <div className="font-bold">Honolulu Blue</div>
                  <div className="text-sm opacity-90">#027BCE</div>
                </div>
                <div className="p-4 rounded-xl bg-teal-shimmer text-white text-center">
                  <div className="font-bold">Teal Shimmer</div>
                  <div className="text-sm opacity-90">#2DD4BF</div>
                </div>
                <div className="p-4 rounded-xl bg-robin text-white text-center">
                  <div className="font-bold">Robin Cyan</div>
                  <div className="text-sm opacity-90">#1CCAD8</div>
                </div>
                <div className="p-4 rounded-xl bg-deep-cyan text-white text-center">
                  <div className="font-bold">Deep Cyan</div>
                  <div className="text-sm opacity-90">#0891B2</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  const tech = [
    { name: 'Flutter', description: 'Cross-platform framework for Android development' },
    { name: 'Hive', description: 'Fast, offline-first local database' },
    { name: 'Supabase', description: 'Backend for authentication and cloud sync' },
    { name: 'ML Kit', description: 'OCR for prescription scanning' },
    { name: 'Material 3', description: 'Modern design language' },
    { name: 'Flutter Notifications', description: 'Smart medication reminders' }
  ]

  return (
    <section className="py-24 bg-snow">
      <div className="container-px mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-oxford/70 max-w-3xl mx-auto">
              Reliv leverages cutting-edge technologies to deliver a fast, reliable, and feature-rich experience
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tech.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <div className="card rounded-xl border border-oxford/10 bg-white p-6">
                <h4 className="font-bold text-oxford mb-2">{item.name}</h4>
                <p className="text-sm text-oxford/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-honolulu/10 via-snow to-robin/10">
      <div className="container-px mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
            Ready to Transform Your Health Journey?
          </h2>
          <p className="text-xl text-oxford/70 max-w-2xl mx-auto mb-8">
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

function Footer() {
  return (
    <>
      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-cloud to-snow">
        <div className="container-px mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
                Meet the Team
              </h2>
              <p className="text-xl text-oxford/70 max-w-2xl mx-auto">
                The passionate individuals building Reliv
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Reveal delay={0}>
              <motion.a
                href="https://github.com/mutahir-muhammad/"
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-2xl border border-oxford/10 bg-white p-6 text-center hover:border-honolulu/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-honolulu to-robin mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MM</span>
                </div>
                <h3 className="text-xl font-bold text-oxford mb-2">Muhammad Mutahir</h3>
                <p className="text-oxford/70 text-sm mb-3">Founder & Lead Developer</p>
                <div className="flex justify-center">
                  <Github className="w-5 h-5 text-oxford/50" />
                </div>
              </motion.a>
            </Reveal>

            <Reveal delay={0.05}>
              <motion.a
                href="https://github.com/Sudais43"
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-2xl border border-oxford/10 bg-white p-6 text-center hover:border-honolulu/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-robin to-deep-cyan mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MS</span>
                </div>
                <h3 className="text-xl font-bold text-oxford mb-2">Muhammad Sudais</h3>
                <p className="text-oxford/70 text-sm mb-3">Developer</p>
                <div className="flex justify-center">
                  <Github className="w-5 h-5 text-oxford/50" />
                </div>
              </motion.a>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.a
                href="https://github.com/khawar2000-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-2xl border border-oxford/10 bg-white p-6 text-center hover:border-honolulu/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-deep-cyan to-emerald mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">KM</span>
                </div>
                <h3 className="text-xl font-bold text-oxford mb-2">Khawar Mehmood</h3>
                <p className="text-oxford/70 text-sm mb-3">Developer</p>
                <div className="flex justify-center">
                  <Github className="w-5 h-5 text-oxford/50" />
                </div>
              </motion.a>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                className="card rounded-2xl border border-oxford/10 bg-white p-6 text-center"
                whileHover={{ y: -4 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald to-teal-shimmer mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">ZA</span>
                </div>
                <h3 className="text-xl font-bold text-oxford mb-2">ZainUlAbideen</h3>
                <p className="text-oxford/70 text-sm mb-3">Developer</p>
                <div className="flex justify-center">
                  <div className="w-5 h-5" />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-oxford text-snow border-t border-white/10">
      <div className="container-px mx-auto py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="text-left">
          <div className="flex items-center gap-2 font-extrabold text-2xl mb-2">
            <img src="/Relive Logo.png" alt="Reliv" className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg" />
            <span>Reliv</span>
          </div>
          <p className="mt-3 text-snow/70">AI-Powered Health Companion</p>
          <p className="mt-2 text-snow/60 text-sm">by <a href="https://ascenity.dev" className="text-teal-shimmer hover:underline">Ascenity</a></p>
        </div>
        <div className="flex flex-col gap-3 justify-start sm:justify-center">
          <Link to="/" className="text-snow/80 hover:text-white transition">← Back to Ascenity</Link>
          <Link to="/engine" className="text-snow/80 hover:text-white transition">Ascenity Engine</Link>
          <Link to="/contact" className="text-snow/80 hover:text-white transition">Contact</Link>
          <a className="text-snow/80 hover:text-white transition" href="#privacy">Privacy Policy</a>
        </div>
        <div className="flex gap-4 justify-start sm:justify-end">
          <a className="p-3 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://github.com/mutahir-muhammad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a className="p-3 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://www.linkedin.com/in/mutahir-muhammad235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center text-snow/70 text-sm pb-8">© {new Date().getFullYear()} Ascenity. All rights reserved.</div>
    </footer>
    </>
  )
}

export default function Reliv() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <div>
      {/* Sticky header */}
      <div className="sticky top-0 z-40 backdrop-blur bg-snow/70 border-b border-oxford/10">
        <div className="container-px mx-auto flex items-center justify-between h-14">
          <Link to="/" className="font-extrabold text-oxford flex items-center gap-2">
            <img src="/Relive Logo.png" alt="Reliv" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
            <span>Reliv</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-oxford/80">
            <a href="#features" className="hover:text-oxford transition">Features</a>
            <Link to="/engine" className="hover:text-oxford transition">Ascenity Engine</Link>
            <Link to="/" className="hover:text-oxford transition">Ascenity.dev</Link>
            <a href="#cta" className="px-3 py-1.5 rounded-md bg-honolulu text-white hover:shadow-soft transition">Coming Soon</a>
          </nav>
          <button
            className="md:hidden p-2 rounded-md hover:bg-oxford/5 text-oxford"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <DesignShowcase />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  )
}
