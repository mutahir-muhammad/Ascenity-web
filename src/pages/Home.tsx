import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { Sparkles, ArrowRight, Cpu, Heart, LineChart, Shield, Zap, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cloud to-snow">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg className="absolute -top-16 -right-16 w-[520px] h-[520px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1ccad8" d="M43.8,-66.7C56.2,-60.7,65.4,-47.5,73.4,-33.2C81.4,-18.9,88.1,-3.6,86.4,10C84.8,23.6,74.7,35.6,63.2,46.7C51.8,57.8,38.9,67.9,24.1,73C9.2,78.1,-7.7,78.1,-22.3,72.7C-36.9,67.3,-49.2,56.6,-59.4,44.1C-69.6,31.6,-77.7,17.3,-79.3,1.6C-80.9,-14.1,-76,-31.1,-66.4,-44.1C-56.9,-57.1,-42.6,-66.2,-27.2,-71C-11.8,-75.7,4.7,-76.1,18.7,-72.4C32.6,-68.8,43.3,-61.2,43.8,-66.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container-px mx-auto py-20 text-center relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-emerald" />
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-oxford">
                Ascenity.dev
              </h1>
            </div>
            <p className="text-2xl sm:text-3xl text-oxford/80 mb-4">
              Building Tomorrow's Wellness Solutions
            </p>
            <p className="text-lg sm:text-xl text-oxford/70 max-w-3xl mx-auto mb-12">
              Founded by <a href="https://github.com/mutahir-muhammad" target="_blank" rel="noopener noreferrer" className="text-honolulu hover:underline font-semibold">Mutahir Muhammad</a>, Ascenity is dedicated to creating intelligent, science-backed applications that empower individuals to understand their minds and optimize their health.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-honolulu to-robin text-white font-bold rounded-xl shadow-soft flex items-center gap-2 hover:shadow-float transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-snow">
        <div className="container-px mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
                Our Products
              </h2>
              <p className="text-xl text-oxford/70 max-w-2xl mx-auto">
                Two powerful applications designed to transform your mental and physical well-being
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Ascenity Engine Card */}
            <Reveal>
              <Link to="/engine">
                <motion.div 
                  className="card rounded-3xl border-2 border-oxford/10 bg-gradient-to-br from-white via-white to-honolulu/5 p-8 h-full hover:border-honolulu/30 transition-all duration-300"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.2)' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center shadow-soft">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-oxford">Ascenity Engine</h3>
                      <p className="text-oxford/70">Mental Wellness Companion</p>
                    </div>
                  </div>

                  <p className="text-oxford/80 text-lg mb-6 leading-relaxed">
                    Understand your mind through intelligent journaling and mood tracking. Discover patterns in your thoughts and feelings to build a more resilient, self-aware life.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-honolulu/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <LineChart className="w-4 h-4 text-honolulu" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">Emotional Granularity</div>
                        <div className="text-oxford/70 text-sm">Transform vague feelings into precise emotional labels</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-honolulu/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Cpu className="w-4 h-4 text-honolulu" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">AI-Powered Insights</div>
                        <div className="text-oxford/70 text-sm">Get personalized patterns and recommendations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-honolulu/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-4 h-4 text-honolulu" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">Privacy First</div>
                        <div className="text-oxford/70 text-sm">End-to-end encrypted, your data stays yours</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-honolulu font-semibold">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            {/* Reliv Card */}
            <Reveal delay={0.1}>
              <Link to="/reliv">
                <motion.div 
                  className="card rounded-3xl border-2 border-oxford/10 bg-gradient-to-br from-white via-white to-honolulu/5 p-8 h-full hover:border-honolulu/30 transition-all duration-300"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.2)' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-soft flex-shrink-0">
                      <img src="/Relive Logo.png" alt="Reliv" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold text-oxford">Reliv</h3>
                      <p className="text-oxford/70">AI Health Companion</p>
                    </div>
                  </div>

                  <p className="text-oxford/80 text-lg mb-6 leading-relaxed">
                    Your complete health tracking solution with AI-powered insights. Track medications, nutrition, workouts, and receive personalized health recommendations.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-honolulu/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-honolulu" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">Comprehensive Tracking</div>
                        <div className="text-oxford/70 text-sm">Medications, meals, and workouts in one place</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-robin/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-robin" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">Offline-First Design</div>
                        <div className="text-oxford/70 text-sm">Works seamlessly without internet connection</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-deep-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Cpu className="w-4 h-4 text-deep-cyan" />
                      </div>
                      <div>
                        <div className="font-semibold text-oxford">AI Chat Interface</div>
                        <div className="text-oxford/70 text-sm">Get health advice and medication insights</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-honolulu font-semibold">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-oxford text-snow">
        <div className="container-px mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-snow/80 leading-relaxed mb-8">
                At Ascenity, we believe that technology should empower individuals to take control of their well-being. Our mission is to create intelligent, accessible tools that bridge the gap between complex health data and actionable insights, helping you live a healthier, more self-aware life.
              </p>
              <p className="text-lg text-snow/70 leading-relaxed">
                Every feature we build is grounded in scientific research and designed with privacy, accessibility, and user empowerment at its core. We're not just building apps—we're building a movement toward holistic digital wellness.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-cloud to-snow">
        <div className="container-px mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-oxford mb-4">
                Meet the Team
              </h2>
              <p className="text-xl text-oxford/70 max-w-2xl mx-auto">
                The passionate individuals building Ascenity's products
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

      {/* Footer */}
      <footer className="bg-oxford text-snow border-t border-white/10">
        <div className="container-px mx-auto py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 font-extrabold text-2xl">
              <Sparkles className="w-7 h-7 text-emerald" /> Ascenity
            </div>
            <p className="mt-3 text-snow/70">Building Tomorrow's Wellness Solutions</p>
            <p className="mt-2 text-snow/60 text-sm">Founded by <a href="https://github.com/mutahir-muhammad" target="_blank" rel="noopener noreferrer" className="text-robin hover:underline">Mutahir Muhammad</a></p>
          </div>
          <div className="flex flex-col gap-3 justify-start sm:justify-center">
            <Link to="/engine" className="text-snow/80 hover:text-white transition">Ascenity Engine</Link>
            <Link to="/reliv" className="text-snow/80 hover:text-white transition">Reliv</Link>
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
    </div>
  )
}
