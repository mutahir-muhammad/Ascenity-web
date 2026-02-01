import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Sparkles, ArrowRight, Cpu, Heart, LineChart, Shield, Zap, 
  Github, Linkedin, Mail, Rocket, Gauge, Eye, Target, Clock, 
  Users, Code, Accessibility, ChevronDown
} from 'lucide-react'
import { Navigation, Footer, Reveal, Button, GlassCard, SectionHeader } from '../components/ui'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#products' },
  { label: 'Contact', href: '/contact' },
]

export default function Home() {
  return (
    <div className="bg-oxford min-h-screen">
      {/* Navigation */}
      <Navigation 
        dark 
        links={navLinks}
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {/* Hero Section - 100dvh */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dark-gradient pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-robin/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-honolulu/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-px relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Mobile: centered, Desktop: left */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/10 border border-robin/20 mb-6">
                  <Sparkles className="w-4 h-4 text-robin" />
                  <span className="text-robin text-sm font-medium">Ascenity.dev</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-snow mb-6 leading-[1.1]">
                  Engineering the Future of{' '}
                  <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                    Health-Tech.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg sm:text-xl lg:text-2xl text-snow/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  I am <span className="text-robin font-semibold">Mutahir</span>. I merge full-stack scalability with human-centric design.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button href="#services" variant="primary" size="lg">
                    View Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button href="#products" variant="outline" size="lg">
                    My Work
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* 3D Abstract Graphic */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Reveal delay={0.2}>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Outer rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-robin/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Inner rotating ring */}
                  <motion.div
                    className="absolute inset-8 rounded-full border-2 border-honolulu/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Center orb */}
                  <div className="absolute inset-16 sm:inset-20 lg:inset-24 rounded-full bg-gradient-to-br from-honolulu to-robin shadow-glow-lg flex items-center justify-center">
                    <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-robin"
                      style={{
                        top: `${20 + i * 12}%`,
                        left: i % 2 === 0 ? '10%' : '85%',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#philosophy" className="flex flex-col items-center gap-2 text-snow/50 hover:text-snow/80 transition-colors">
            <span className="text-sm hidden sm:block">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* Philosophy Section - Bento Grid */}
      <section id="philosophy" className="section-py bg-oxford">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Philosophy"
              title="Driving innovation through purpose and precision"
            />
          </Reveal>

          {/* Bento Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Mission - Spans 2 on desktop */}
            <Reveal delay={0}>
              <GlassCard className="md:col-span-2 h-full">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-snow mb-2">Mission</h3>
                    <p className="text-snow/70 leading-relaxed">
                      Bridge the gap between complex engineering and intuitive user well-being. We build technology that empowers, not overwhelms.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            {/* Current Status */}
            <Reveal delay={0.1}>
              <GlassCard className="h-full">
                <div className="w-10 h-10 rounded-lg bg-robin/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-robin" />
                </div>
                <h3 className="text-lg font-bold text-snow mb-2">Current Status</h3>
                <p className="text-snow/70 text-sm leading-relaxed">
                  Leading Tech at <span className="text-robin font-semibold">ETL Online</span> (2,700+ users) & scaling <span className="text-robin font-semibold">Shifaone</span>.
                </p>
              </GlassCard>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.15}>
              <GlassCard className="h-full">
                <div className="w-10 h-10 rounded-lg bg-honolulu/20 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-honolulu" />
                </div>
                <h3 className="text-lg font-bold text-snow mb-2">Goal</h3>
                <p className="text-snow/70 text-sm leading-relaxed">
                  Democratize health insights through high-performance software accessible to all.
                </p>
              </GlassCard>
            </Reveal>

            {/* Vision 1 Year - Full width */}
            <Reveal delay={0.2}>
              <GlassCard className="md:col-span-2 lg:col-span-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-robin to-emerald flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-snow mb-1">Vision (1 Year)</h3>
                    <p className="text-snow/70">
                      Establish Ascenity.dev as the <span className="text-robin font-semibold">premier partner for health-tech startups</span> by 2027.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-py bg-gradient-to-b from-oxford to-[#071828]">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Services"
              title="End-to-end engineering solutions for health-tech ventures"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1: MVP Engineering */}
            <Reveal delay={0}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-2xl p-6 sm:p-8 h-full hover:border-honolulu/50 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-snow mb-3">MVP Engineering</h3>
                <p className="text-snow/70 mb-6 leading-relaxed">
                  Rapid prototyping to production-ready applications using React Native, Next.js, and modern cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-honolulu/20 text-honolulu text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-robin/20 text-robin text-sm rounded-full">Next.js</span>
                </div>
              </motion.div>
            </Reveal>

            {/* Service 2: Performance */}
            <Reveal delay={0.1}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-2xl p-6 sm:p-8 h-full hover:border-honolulu/50 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-robin to-emerald flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-snow mb-3">Performance Optimization</h3>
                <p className="text-snow/70 mb-6 leading-relaxed">
                  Eliminating scroll lag, optimizing fetch cycles, and achieving sub-100ms response times for critical paths.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm rounded-full">60 FPS</span>
                  <span className="px-3 py-1 bg-robin/20 text-robin text-sm rounded-full">Bundle Optimization</span>
                </div>
              </motion.div>
            </Reveal>

            {/* Service 3: Accessibility */}
            <Reveal delay={0.2}>
              <motion.div
                className="group relative bg-oxford/80 backdrop-blur-md border border-robin/20 rounded-2xl p-6 sm:p-8 h-full hover:border-honolulu/50 transition-all duration-300 md:col-span-2 lg:col-span-1"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald to-teal-shimmer flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                  <Accessibility className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-snow mb-3">Accessible UI Systems</h3>
                <p className="text-snow/70 mb-6 leading-relaxed">
                  Colorblind-safe palettes, WCAG 2.1 AA compliant interfaces, and inclusive design patterns for all users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-shimmer/20 text-teal-shimmer text-sm rounded-full">WCAG 2.1</span>
                  <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm rounded-full">A11y First</span>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products Section - Alternating Layout */}
      <section id="products" className="section-py bg-[#071828]">
        <div className="container-px">
          <Reveal>
            <SectionHeader
              dark
              overline="Work"
              title="Purpose-built applications for wellness"
            />
          </Reveal>

          {/* Product 1: Ascenity - Text Left, Visual Right */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honolulu/20 text-honolulu text-xs font-semibold uppercase tracking-wide mb-4">
                  Sole Proprietor Product
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-snow mb-4">
                  Ascenity Engine
                </h3>
                <p className="text-lg text-snow/70 mb-6 leading-relaxed">
                  A dedicated space for mental clarity. Understand your emotions through intelligent journaling and discover patterns that lead to lasting self-awareness.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: <LineChart className="w-5 h-5" />, text: 'Emotional Granularity Tracking' },
                    { icon: <Cpu className="w-5 h-5" />, text: 'AI-Powered Insights' },
                    { icon: <Shield className="w-5 h-5" />, text: 'Privacy-First Architecture' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-snow/70">
                      <span className="text-robin">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded">Firebase</span>
                </div>
                <Button to="/engine" variant="primary">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Visual Placeholder */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-honolulu to-robin">
                  <div className="bg-oxford rounded-3xl p-8 sm:p-12 w-full max-w-md aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mb-4 shadow-glow">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-snow/50 text-sm">App Screenshot Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Product 2: Reliv - Visual Left, Text Right */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Visual Placeholder */}
              <div className="flex justify-center">
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-robin to-emerald">
                  <div className="bg-oxford rounded-3xl p-8 sm:p-12 w-full max-w-md aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-glow mb-4">
                        <img src="/Relive Logo.png" alt="Reliv" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-snow/50 text-sm">App Screenshot Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-robin/20 text-robin text-xs font-semibold uppercase tracking-wide mb-4">
                  Team Project (Lead Dev)
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-snow mb-4">
                  Reliv
                </h3>
                <p className="text-lg text-snow/70 mb-6 leading-relaxed">
                  Family health management architecture. Track medications, nutrition, workouts, and receive AI-powered health recommendations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: <Heart className="w-5 h-5" />, text: 'Comprehensive Health Tracking' },
                    { icon: <Users className="w-5 h-5" />, text: 'Multi-Member Family Support' },
                    { icon: <Zap className="w-5 h-5" />, text: 'Offline-First Architecture' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-snow/70">
                      <span className="text-emerald">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-white/5 text-snow/50 text-xs rounded">Azure Cosmos DB</span>
                </div>
                <Button to="/reliv" variant="primary">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-py bg-gradient-to-b from-[#071828] to-oxford">
        <div className="container-px max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader
              dark
              title="Meet the Founder"
              subtitle="The passionate engineer behind Ascenity's products"
            />
          </Reveal>

          <div className="flex justify-center mt-12">
            <Reveal delay={0.1}>
              <motion.a
                href="https://github.com/mutahir-muhammad/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oxford/90 backdrop-blur-md border border-robin/30 rounded-2xl p-8 sm:p-12 text-center hover:border-robin/60 hover:bg-oxford transition-all duration-300 max-w-lg w-full shadow-xl"
                whileHover={{ y: -6 }}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-honolulu via-robin to-teal-shimmer mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl sm:text-5xl font-bold text-white">MM</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-snow mb-3">Muhammad Mutahir</h3>
                <p className="text-robin font-bold text-lg mb-6">Founder & Lead Developer</p>
                
                <p className="text-snow/70 text-base sm:text-lg mb-8 leading-relaxed px-4">
                  Senior SWE specializing in health-tech, building scalable systems for wellness innovation.
                </p>
                
                <div className="flex justify-center">
                  <div className="p-3 rounded-xl bg-white/5 hover:bg-robin/20 transition-all duration-300">
                    <Github className="w-6 h-6 text-snow/70 hover:text-snow transition-colors" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-oxford border-t border-white/10">
        <div className="container-px">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow mb-4">
                Ready to Scale?
              </h2>
              <p className="text-lg text-snow/70 mb-8">
                Let's build the next generation of health-tech solutions together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="mailto:Mutahir328@gmail.com" variant="primary" size="lg">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Page
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <Footer dark />
    </div>
  )
}
