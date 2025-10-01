import { useEffect } from 'react'
import { motion, useAnimation, useInView, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Lock, LineChart, NotebookText, BrainCircuit, Radar, Sparkles, Heart, Tags, Github, Linkedin, Menu, X } from 'lucide-react'
import { useRef } from 'react'
import { useState } from 'react'

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

function StoreBadges() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <motion.a 
        href="#" 
        className="bg-gradient-to-r from-honolulu to-robin text-white font-bold py-3 px-8 rounded-xl shadow-soft flex items-center justify-center gap-2 hover:shadow-float transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg">Coming Soon</span>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-white"
        />
      </motion.a>
    </div>
  )
}

function SectionHeader({ overline, title, subtitle, dark = false }: { overline?: string; title: string; subtitle?: string; dark?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
      {overline && (
        <div className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-robin/80' : 'text-honolulu'}`}>{overline}</div>
      )}
      <h2 className={`text-2xl sm:text-4xl font-extrabold leading-tight mt-2 ${dark ? 'text-snow' : 'text-oxford'}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? 'text-snow/80' : 'text-oxford/70'}`}>{subtitle}</p>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute -top-16 -right-16 w-[520px] h-[520px] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1ccad8" d="M43.8,-66.7C56.2,-60.7,65.4,-47.5,73.4,-33.2C81.4,-18.9,88.1,-3.6,86.4,10C84.8,23.6,74.7,35.6,63.2,46.7C51.8,57.8,38.9,67.9,24.1,73C9.2,78.1,-7.7,78.1,-22.3,72.7C-36.9,67.3,-49.2,56.6,-59.4,44.1C-69.6,31.6,-77.7,17.3,-79.3,1.6C-80.9,-14.1,-76,-31.1,-66.4,-44.1C-56.9,-57.1,-42.6,-66.2,-27.2,-71C-11.8,-75.7,4.7,-76.1,18.7,-72.4C32.6,-68.8,43.3,-61.2,43.8,-66.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-10 items-center pt-20 pb-16">
        <div>
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-oxford">
              The Architecture of Emotional Clarity
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl text-oxford/80 max-w-xl">
              A scientific framework for emotional regulation and self-awareness—built on Emotional Granularity, Affect Labeling, Expressive Writing, and AI-driven insights.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal>
            <motion.div
              initial={{ rotate: -8, y: 20, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mx-auto w-[90%] max-w-[380px] aspect-[9/19] rounded-[2.5rem] border-4 border-oxford/90 shadow-2xl bg-snow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-robin/10 via-transparent to-honolulu/10"></div>
              <div className="h-10 w-40 bg-oxford/90 rounded-b-2xl mx-auto" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-oxford/60">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span>
                  Quick Log
                </div>
                <h3 className="mt-2 font-bold text-oxford">Discriminate • Label • Reflect</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["Joy", "Calm", "Anxious", "Tired"].map((mood) => (
                    <div key={mood} className="rounded-xl p-3 bg-white/70 border border-oxford/10">
                      <div className="text-sm font-semibold text-oxford">{mood}</div>
                      <div className="mt-1 h-2 bg-oxford/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-honolulu"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl p-3 bg-white/70 border border-oxford/10">
                  <div className="text-sm font-semibold text-oxford">Affect Labeling</div>
                  <p className="mt-1 text-xs text-oxford/70">"Name it to tame it" — labeling shifts activation from amygdala to prefrontal cortex.
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const items = [
    { title: 'From Amorphous to Articulated', text: 'Transform vague "bad" into precise labels like disappointment, overwhelm, or envy.', icon: <Radar className="w-6 h-6 text-honolulu" /> },
    { title: 'Reveal Hidden Triggers', text: 'Link feelings to context — #work, #family, #sleep — to surface patterns.', icon: <Tags className="w-6 h-6 text-honolulu" /> },
    { title: 'Reflection with Feedback', text: 'Guided journaling and insights turn entries into growth-oriented feedback.', icon: <NotebookText className="w-6 h-6 text-honolulu" /> },
  ]
  return (
    <section id="challenge" className="py-16 sm:py-24 bg-snow">
      <div className="container-px mx-auto">
        <SectionHeader title="Feeling is complex. Understanding it shouldn't be." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="card rounded-2xl border border-oxford/10 bg-white/70 p-6">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-lg font-bold text-oxford">{item.title}</h3>
                </div>
                <p className="mt-3 text-oxford/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Solution() {
  return (
  <section id="solution" className="py-16 sm:py-24 bg-oxford text-snow">
      <div className="container-px mx-auto">
        <SectionHeader
          dark
          title="The Gap Between Feeling and Knowing"
          subtitle="Most mood trackers are too simple. Most journals are too quiet. Ascenity bridges them with science-backed design."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="card rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold">Go Beyond 'Happy' or 'Sad'</h3>
              <p className="mt-2 text-snow/80">Emotional Granularity turns vague feeling into precise language — a learnable skill linked to resilience.</p>
              <div className="mt-4 space-y-3">
                <div className="p-3 rounded-xl bg-white/10">
                  <div className="text-sm text-snow/60 mb-1">Monday morning</div>
                  <div className="font-semibold mb-1">"I feel overwhelmed"</div>
                  <div className="text-xs text-snow/80">Cause: 3 deadline projects + lack of sleep</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10">
                  <div className="text-sm text-snow/60 mb-1">Tuesday afternoon</div>
                  <div className="font-semibold mb-1">"I feel energized"</div>
                  <div className="text-xs text-snow/80">Cause: Completed project + team appreciation</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10">
                  <div className="text-sm text-snow/60 mb-1">Wednesday evening</div>
                  <div className="font-semibold mb-1">"I feel content"</div>
                  <div className="text-xs text-snow/80">Cause: Quality time with family + good workout</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold">Connect Feelings to Life</h3>
              <p className="mt-2 text-snow/80">Affect labeling and context (tags like #work, #family) surface triggers and supports you can act on.</p>
              <div className="mt-4 space-y-3">
                {[
                  { mood: 'Anxious', tags: ['#work', '#deadline'] },
                  { mood: 'Calm', tags: ['#family', '#walk'] },
                  { mood: 'Joyful', tags: ['#friends', '#music'] },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                    <div className="font-semibold">{r.mood}</div>
                    <div className="flex gap-2 flex-wrap">
                      {r.tags.map(t => (
                        <span key={t} className="px-2 py-1 rounded-full text-xs bg-honolulu/30">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Science() {
  const [tab, setTab] = useState<'foundation' | 'process' | 'insight'>('foundation')
  return (
  <section id="science" className="relative overflow-hidden py-16 sm:py-24 bg-snow">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-b from-robin/20 to-honolulu/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-b from-phthalo/20 to-oxford/10 blur-3xl" />
      <div className="container-px mx-auto">
        <SectionHeader title="The Science Behind Ascenity" subtitle="A deep-dive into the foundations, process, and insight engine powering emotional clarity." />
        {/* Desktop tabs */}
        <div className="hidden lg:block">
          <div role="tablist" aria-label="Science tabs" className="inline-flex rounded-lg border border-oxford/10 bg-white/70 p-1">
            {[
              { id: 'foundation', label: 'Foundation' },
              { id: 'process', label: 'Process' },
              { id: 'insight', label: 'Insight Engine' },
            ].map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === (t.id as any)}
                className={`px-4 py-2 rounded-md text-sm transition ${tab === t.id ? 'bg-honolulu text-white' : 'text-oxford/80 hover:bg-oxford/5'}`}
                onClick={() => setTab(t.id as any)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-6">
            {tab === 'foundation' && (
              <div className="card rounded-2xl bg-oxford text-snow border border-white/10 p-6">
                <h3 className="text-xl font-bold">Go Beyond 'Happy' or 'Sad'</h3>
                <p className="mt-2 text-snow/80">Emotional Granularity turns vague feeling into precise language — a learnable skill linked to resilience.</p>
                <div className="mt-4 space-y-4">
                  <div className="p-4 rounded-xl bg-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold flex items-center gap-2">
                        <span>😟</span>
                        <span>"I feel bad"</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-phthalo/30 rounded-full">Before Ascenity</span>
                    </div>
                    <p className="text-sm text-snow/80">A vague label that provides little insight or direction for managing emotions.</p>
                  </div>
                  <motion.div 
                    className="h-12 flex justify-center items-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <div className="p-4 rounded-xl bg-emerald/20">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold flex items-center gap-2">
                        <span>😔</span>
                          <span>"I feel disappointed because my expectations weren't met."</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-robin/30 rounded-full">With Ascenity</span>
                    </div>
                      <p className="text-sm text-snow/90">
                        <span className="font-bold text-honolulu">Clarity:</span> The emotion is precisely labeled as <span className="font-bold text-robin">disappointment</span>.<br/>
                        <span className="font-bold text-honolulu">Subjective Reasoning:</span> The cause is identified—expectations not being met—giving personal context and actionable insight.
                      </p>
                  </div>
                </div>
              </div>
            )}
            {tab === 'process' && (
              <div className="card rounded-2xl bg-oxford text-snow border border-white/10 p-6">
                <h3 className="text-xl font-bold">Connect Feelings to Life</h3>
                <p className="mt-2 text-snow/80">Affect labeling and context (tags like #work, #family) surface triggers and supports you can act on.</p>
                <div className="mt-4 space-y-3">
                  {[
                    { mood: 'Anxious', tags: ['#work', '#deadline'] },
                    { mood: 'Calm', tags: ['#family', '#walk'] },
                    { mood: 'Joyful', tags: ['#friends', '#music'] },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                      <div className="font-semibold">{r.mood}</div>
                      <div className="flex gap-2 flex-wrap">
                        {r.tags.map(t => (
                          <span key={t} className="px-2 py-1 rounded-full text-xs bg-honolulu/30">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === 'insight' && (
              <div className="card rounded-2xl bg-oxford text-snow border border-white/10 p-6">
                <h3 className="text-xl font-bold">Insight Engine</h3>
                <p className="mt-2 text-snow/80">Visual dashboards and AI‑assisted insights turn patterns into action while keeping you in control.</p>
                <ul className="mt-4 list-disc pl-5 text-snow/80 text-sm space-y-1">
                  <li>Custom charts for personal relevance</li>
                  <li>Insight assistant, not a therapist</li>
                  <li>Clinician‑in‑the‑loop safeguards</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/tablet layout retains the alternating blocks */}
        <div className="grid lg:hidden gap-8 items-center">
          <Reveal>
            <div className="card rounded-2xl border border-oxford/10 bg-white/70 p-6">
              <h3 className="text-xl font-bold text-oxford">1) The Foundation</h3>
              <p className="mt-2 text-oxford/70">Emotional Granularity and Affect Labeling: naming feelings precisely reduces amygdala activation and engages the prefrontal cortex ("name it to tame it").</p>
              <ul className="mt-3 text-oxford/70 list-disc pl-5 space-y-1 text-sm">
                <li>From amorphous to articulated emotion</li>
                <li>Granularity is a learnable skill</li>
                <li>Immediate calming via labeling</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card rounded-2xl border border-oxford/10 bg-white/70 p-6">
              <h3 className="text-xl font-bold text-oxford">2) The Process</h3>
              <p className="mt-2 text-oxford/70">Expressive Writing (Pennebaker) and CBT Self‑Monitoring: guided journaling creates narrative, reveals thought‑feeling‑behavior links, and supports regulation.</p>
              <ul className="mt-3 text-oxford/70 list-disc pl-5 space-y-1 text-sm">
                <li>Dual prompts: event + feelings</li>
                <li>Adaptive prompts for readiness</li>
                <li>Log for quick relief; reflect for depth</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card rounded-2xl border border-oxford/10 bg-white/70 p-6">
              <h3 className="text-xl font-bold text-oxford">3) The Insight Engine</h3>
              <p className="mt-2 text-oxford/70">Visual dashboards and AI‑assisted insights turn patterns into action while keeping you in control.</p>
              <ul className="mt-3 text-oxford/70 list-disc pl-5 space-y-1 text-sm">
                <li>Custom charts for personal relevance</li>
                <li>Insight assistant, not a therapist</li>
                <li>Clinician‑in‑the‑loop safeguards</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="card mt-8 rounded-2xl border border-oxford/10 bg-white p-8 shadow-soft">
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-honolulu to-robin text-white shadow-soft mb-4" 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2.5" fill="none" />
                  <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-oxford mb-2">The Ascenity Flywheel</h3>
              <p className="text-oxford/60 max-w-2xl mx-auto">
                A self-reinforcing cycle where each step strengthens the next, building momentum toward lasting emotional clarity.
              </p>
            </div>
            
            <div id="flywheel" className="relative mx-auto max-w-2xl aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Clean circular path */}
                <motion.div 
                  className="absolute w-[85%] h-[85%] rounded-full border-2 border-honolulu/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Central circle */}
                <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-honolulu to-robin flex items-center justify-center text-white shadow-lg">
                  <div className="text-center">
                    <Sparkles className="w-10 h-10 mx-auto mb-2" />
                    <div className="text-lg font-bold">Emotional<br/>Clarity</div>
                  </div>
                </div>
                
                {/* Clean stage cards */}
                {[
                { 
                  name: "Log", 
                  description: "Discriminate & Label", 
                  icon: <Heart className="w-7 h-7 text-white" />, 
                  position: "top", 
                  color: "from-honolulu to-robin",
                  glow: "0 0 20px rgba(28, 202, 216, 0.6)",
                  particle: "#1ccad8"
                },
                { 
                  name: "Reflect", 
                  description: "Express & Monitor", 
                  icon: <NotebookText className="w-7 h-7 text-white" />, 
                  position: "right", 
                  color: "from-robin to-phthalo",
                  glow: "0 0 20px rgba(15, 76, 129, 0.6)",
                  particle: "#0f4c81" 
                },
                { 
                  name: "Analyze", 
                  description: "Visualize & Detect", 
                  icon: <LineChart className="w-7 h-7 text-white" />, 
                  position: "bottom", 
                  color: "from-phthalo to-oxford",
                  glow: "0 0 20px rgba(10, 34, 57, 0.6)",
                  particle: "#0a2239"
                },
                { 
                  name: "Adapt", 
                  description: "Plan & Act", 
                  icon: <BrainCircuit className="w-7 h-7 text-white" />, 
                  position: "left", 
                  color: "from-oxford to-honolulu",
                  glow: "0 0 20px rgba(2, 123, 206, 0.6)",
                  particle: "#027bce"
                }
              ].map((stage, index) => {
                // Calculate position around the circle
                const angle = (index * 90); // 0 to start from top
                const radius = "42%";
                const style = {
                  top: stage.position === "top" ? "0%" : stage.position === "bottom" ? "auto" : "50%",
                  bottom: stage.position === "bottom" ? "0%" : "auto",
                  left: stage.position === "left" ? "0%" : stage.position === "right" ? "auto" : "50%",
                  right: stage.position === "right" ? "0%" : "auto",
                  transform: `translate(${stage.position === "left" ? "0%" : stage.position === "right" ? "0%" : "-50%"}, ${stage.position === "top" ? "0%" : stage.position === "bottom" ? "0%" : "-50%"})`
                };
                
                return (
                  <motion.div 
                    key={stage.name}
                    className="absolute w-36 z-20"
                    style={style}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className={`relative bg-gradient-to-br ${stage.color} p-4 rounded-xl shadow-lg`}>
                      <div className="flex flex-col items-center text-center text-white">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                          {stage.icon}
                        </div>
                        <div className="font-bold text-lg">{stage.name}</div>
                        <div className="text-xs opacity-90 mt-1">{stage.description}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Simple connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#027bce" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#1ccad8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#027bce" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Circular connecting path */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="42%"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </div>
          </div>
            
            <div className="mt-8 mx-auto max-w-2xl">
              <div className="bg-gradient-to-r from-honolulu/5 to-robin/5 p-6 rounded-xl border border-honolulu/20">
                <h4 className="text-center font-bold text-oxford mb-3 text-lg">How The Flywheel Works</h4>
                <p className="text-oxford/70 mb-4 text-center text-sm">
                  Each stage reinforces the next, creating a continuous cycle of emotional growth:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-honolulu to-robin flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <div className="font-semibold text-honolulu">Log</div>
                      <div className="text-xs text-oxford/70">Capture emotions with precision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-robin to-phthalo flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <div className="font-semibold text-robin">Reflect</div>
                      <div className="text-xs text-oxford/70">Explore contexts and patterns</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-phthalo to-oxford flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <div className="font-semibold text-phthalo">Analyze</div>
                      <div className="text-xs text-oxford/70">Visualize trends and insights</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-oxford to-honolulu flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <div className="font-semibold text-oxford">Adapt</div>
                      <div className="text-xs text-oxford/70">Take informed action</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
function Accordion({ title, children, colorScheme = "honolulu" }: { title: string; children: React.ReactNode; colorScheme?: "honolulu" | "robin" | "phthalo" | "oxford" }) {
  const [open, setOpen] = useState(false)
  
  const colorClasses = {
    base: {
      honolulu: "border-honolulu/20 bg-gradient-to-br from-white via-white to-honolulu/5",
      robin: "border-robin/20 bg-gradient-to-br from-white via-white to-robin/5",
      phthalo: "border-phthalo/20 bg-gradient-to-br from-white via-white to-phthalo/5",
      oxford: "border-oxford/20 bg-gradient-to-br from-white via-white to-oxford/5"
    },
    title: {
      honolulu: "text-honolulu",
      robin: "text-robin",
      phthalo: "text-phthalo",
      oxford: "text-oxford"
    },
    icon: {
      honolulu: "bg-gradient-to-r from-honolulu to-robin",
      robin: "bg-gradient-to-r from-robin to-phthalo",
      phthalo: "bg-gradient-to-r from-phthalo to-oxford",
      oxford: "bg-gradient-to-r from-oxford to-honolulu"
    },
    border: {
      honolulu: "border-honolulu/10",
      robin: "border-robin/10",
      phthalo: "border-phthalo/10",
      oxford: "border-oxford/10"
    },
    bg: {
      honolulu: "bg-honolulu/5",
      robin: "bg-robin/5",
      phthalo: "bg-phthalo/5",
      oxford: "bg-oxford/5"
    }
  }
  
  return (
    <div className={`rounded-xl border ${colorClasses.base[colorScheme]} shadow-soft overflow-hidden`}>
      <motion.button
        className={`w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between ${open ? colorClasses.bg[colorScheme] : ""}`}
        onClick={() => setOpen(v => !v)}
        whileHover={{ backgroundColor: "rgba(10, 34, 57, 0.03)" }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className={`w-8 h-8 rounded-full ${colorClasses.icon[colorScheme]} flex items-center justify-center text-white shadow-soft`}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-sm">{open ? "−" : "+"}</span>
          </motion.div>
          <span className={`font-semibold ${colorClasses.title[colorScheme]}`}>{title}</span>
        </div>
      </motion.button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: open ? 'auto' : 0, 
          opacity: open ? 1 : 0,
          y: open ? 0 : -10
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`overflow-hidden border-t ${colorClasses.border[colorScheme]}`}
      >
        <div className={`px-4 sm:px-6 py-4 sm:py-5 text-oxford/80 prose prose-oxford max-w-none ${colorClasses.bg[colorScheme]}`}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

function DeepDive() {
  return (
  <section id="deep-dive" className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-snow to-snow">
      {/* Decorative waves/orbs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-b from-honolulu/10 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-gradient-to-tr from-robin/20 to-phthalo/10 blur-3xl" />
      <div className="container-px mx-auto">
        <SectionHeader
          title="Deep‑Dive: The Architecture of Emotional Clarity"
          subtitle="The problem we solve: vague feelings, hidden triggers, and reflection without feedback — transformed into precise language, actionable context, and supportive insight."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card rounded-2xl border border-oxford/10 bg-gradient-to-br from-white via-white to-robin/5 p-6 shadow-soft">
              <h3 className="text-xl font-bold text-oxford">Problem → Solution</h3>
              <ul className="mt-3 space-y-3 text-oxford/80">
                <li className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-honolulu/10 to-robin/10 border border-honolulu/10">
                  <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-honolulu to-robin flex items-center justify-center text-white shadow-soft">→</div>
                  <div>
                    <span className="font-semibold text-honolulu">Amorphous feeling</span> to <span className="font-semibold text-robin">Articulated emotion</span> via Emotional Granularity
                  </div>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-robin/10 to-phthalo/10 border border-robin/10">
                  <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-robin to-phthalo flex items-center justify-center text-white shadow-soft">→</div>
                  <div>
                    <span className="font-semibold text-robin">Hidden triggers</span> to <span className="font-semibold text-phthalo">Context tags and journaling</span> (CBT self‑monitoring)
                  </div>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-phthalo/10 to-honolulu/10 border border-phthalo/10">
                  <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-phthalo to-honolulu flex items-center justify-center text-white shadow-soft">→</div>
                  <div>
                    <span className="font-semibold text-phthalo">Reflection without feedback</span> to <span className="font-semibold text-honolulu">Visual dashboards + AI insights</span>
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-oxford/70 text-sm bg-oxford/5 p-3 rounded-lg italic">Each log is a micro‑intervention: labeling recruits prefrontal control and calms reactivity ("name it to tame it").</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card rounded-2xl border border-oxford/10 bg-gradient-to-br from-white via-white to-honolulu/5 p-6 shadow-soft hover:shadow-float transition-all duration-300">
              <h3 className="text-xl font-bold text-oxford flex items-center gap-2">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="url(#circleGradient)" strokeWidth="2" fill="none" />
                    <defs>
                      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#027bce" />
                        <stop offset="50%" stopColor="#1ccad8" />
                        <stop offset="100%" stopColor="#027bce" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                Conceptual Framework
              </h3>
              <p className="mt-2 text-oxford/80">A scientifically-backed approach to achieving emotional clarity through an integrated process.</p>
              
              <div className="mt-3 p-4 bg-gradient-to-br from-oxford/5 to-honolulu/5 rounded-lg border border-oxford/10">
                <p className="text-oxford/80 text-sm">Experience the interactive flywheel visualization in the above section that demonstrates how each component reinforces the others.</p>
                
                <div className="mt-4 flex flex-wrap justify-center">
                  <motion.a 
                    href="#flywheel" 
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-honolulu to-robin text-white rounded-lg shadow-soft"
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(2, 123, 206, 0.2)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                      <path d="M12 5L12 19M12 5L19 12M12 5L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Jump to Flywheel
                  </motion.a>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-honolulu/10 border border-honolulu/20"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(2, 123, 206, 0.15)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-honolulu to-robin flex items-center justify-center text-white shadow-soft">1</div>
                    <div className="font-medium text-honolulu">Log: Discriminate + label</div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-robin/10 border border-robin/20"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(28, 202, 216, 0.15)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-robin to-phthalo flex items-center justify-center text-white shadow-soft">2</div>
                    <div className="font-medium text-robin">Reflect: Express + monitor</div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-phthalo/10 border border-phthalo/20"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(15, 76, 129, 0.15)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-phthalo to-oxford flex items-center justify-center text-white shadow-soft">3</div>
                    <div className="font-medium text-phthalo">Analyze: Visualize + detect</div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-oxford/10 border border-oxford/20"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(10, 34, 57, 0.15)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-oxford to-honolulu flex items-center justify-center text-white shadow-soft">4</div>
                    <div className="font-medium text-oxford">Adapt: Plan + act</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="card rounded-2xl bg-gradient-to-br from-white via-white to-honolulu/10 border border-honolulu/20 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-honolulu to-robin flex items-center justify-center text-white shadow-soft">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="text-lg font-bold text-honolulu">Part 1: The Foundation</h4>
              </div>
              <p className="mt-3 text-oxford/80 text-sm">
                <span className="font-semibold">Emotional Granularity & Affect Labeling:</span> precise naming is not passive; it's an active intervention that recruits the prefrontal cortex and reduces amygdala activation.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs p-2 rounded-lg bg-honolulu/10">
                <span className="font-semibold text-honolulu">Key insight:</span> 
                <span className="text-oxford/80">Naming emotions with precision activates regulation pathways</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card rounded-2xl bg-gradient-to-br from-white via-white to-robin/10 border border-robin/20 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-robin to-phthalo flex items-center justify-center text-white shadow-soft">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="text-lg font-bold text-robin">Part 2: The Process</h4>
              </div>
              <p className="mt-3 text-oxford/80 text-sm">
                <span className="font-semibold">Expressive Writing (Pennebaker) + CBT Self‑Monitoring</span> structure experience into narrative and patterns that support lasting regulation.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs p-2 rounded-lg bg-robin/10">
                <span className="font-semibold text-robin">Key insight:</span> 
                <span className="text-oxford/80">Structured reflection reveals thought-feeling-behavior links</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card rounded-2xl bg-gradient-to-br from-white via-white to-phthalo/10 border border-phthalo/20 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-phthalo to-oxford flex items-center justify-center text-white shadow-soft">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="text-lg font-bold text-phthalo">Part 3: The Insight Engine</h4>
              </div>
              <p className="mt-3 text-oxford/80 text-sm">
                <span className="font-semibold">Visual feedback makes patterns tangible;</span> AI augments reflection (insight assistant, clinician‑in‑the‑loop, privacy by design).
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs p-2 rounded-lg bg-phthalo/10">
                <span className="font-semibold text-phthalo">Key insight:</span> 
                <span className="text-oxford/80">AI-enhanced visualization creates actionable patterns</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 space-y-4">
            <Accordion title="Foundation: Emotional Granularity" colorScheme="honolulu">
              <div className="space-y-3">
                <p>
                  The fundamental premise is that <strong className="text-honolulu">precisely identifying and labeling an emotional state</strong> is an active, potent intervention. Emotional Granularity (EG) is a learnable skill that transforms amorphous feeling into articulated emotion, building resilience and enabling regulation.
                </p>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-honolulu/5 border border-honolulu/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-honolulu to-robin flex items-center justify-center text-white shadow-soft">🔍</div>
                  <div>
                    <div className="font-semibold text-honolulu mb-1">Key Research:</div>
                    <p className="text-sm text-oxford/80">Affect labeling shifts activation from amygdala to prefrontal cortex, providing immediate calming and control (Lieberman et al., 2007).</p>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title="Process: Structured Reflection" colorScheme="robin">
              <div className="space-y-3">
                <p>
                  <strong className="text-robin">Expressive writing organizes chaotic experience into narrative</strong>, reduces cognitive load, and supports meaning‑making; CBT self‑monitoring exposes the thought‑feeling‑behavior link.
                </p>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-robin/5 border border-robin/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-robin to-phthalo flex items-center justify-center text-white shadow-soft">📝</div>
                  <div>
                    <div className="font-semibold text-robin mb-1">Practical Application:</div>
                    <p className="text-sm text-oxford/80">Dual prompts (event + feelings) and adaptive guidance prevent overwhelm and optimize the timing and depth of reflection.</p>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title="Insight Engine: Visual Patterns" colorScheme="phthalo">
              <div className="space-y-3">
                <p>
                  <strong className="text-phthalo">Visualization externalizes the inner landscape</strong>, creating a motivational feedback loop; personalization boosts retention and engagement over time.
                </p>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-phthalo/5 border border-phthalo/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-phthalo to-oxford flex items-center justify-center text-white shadow-soft">🤖</div>
                  <div>
                    <div className="font-semibold text-phthalo mb-1">AI Integration:</div>
                    <p className="text-sm text-oxford/80">AI provides pattern detection and context‑aware suggestions while remaining an insight assistant (not a therapist) with clinician oversight and strict privacy controls.</p>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title="Strategy: Continuous Improvement" colorScheme="oxford">
              <div className="space-y-3">
                <p>
                  A <strong>synergistic approach drives increasing clarity</strong> through complementary features working together as an integrated system.
                </p>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-oxford/5 border border-oxford/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-oxford to-honolulu flex items-center justify-center text-white shadow-soft">⚙️</div>
                  <div>
                    <div className="font-semibold text-oxford mb-1">Implementation:</div>
                    <p className="text-sm text-oxford/80">Strategic recommendations include tiered logging (Quick Log vs. Reflect), positive‑psychology visualization, customizable dashboards, clear expectation‑setting in onboarding, and clinician‑in‑the‑loop AI oversight.</p>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'Granular Emotion Logging', icon: <Heart className="w-6 h-6 text-honolulu" />, text: 'A learnable skill that builds resilience and clarity.' },
    { title: 'Reflective Journaling', icon: <NotebookText className="w-6 h-6 text-honolulu" />, text: 'Expressive writing + CBT self-monitoring prompts.' },
    { title: 'AI-Powered Insights', icon: <BrainCircuit className="w-6 h-6 text-honolulu" />, text: 'Pattern detection that augments, not replaces, your judgment.' },
    { title: 'Visualize Your Journey', icon: <LineChart className="w-6 h-6 text-honolulu" />, text: 'Custom dashboards that motivate and inform action.' },
  ]
  return (
  <section id="features" className="py-16 sm:py-24 bg-snow">
      <div className="container-px mx-auto">
        <SectionHeader title="Your Toolkit for Emotional Clarity." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card rounded-2xl border border-oxford/10 bg-white/70 p-6">
                <div className="flex items-center gap-3">
                  {f.icon}
                  <h3 className="text-lg font-bold text-oxford">{f.title}</h3>
                </div>
                <p className="mt-3 text-oxford/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Privacy() {
  return (
  <section id="privacy" className="py-16 sm:py-24 bg-oxford text-snow">
      <div className="container-px mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <ShieldCheck className="w-12 h-12 mx-auto text-emerald" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Your Thoughts are Yours. Period.</h2>
            <p className="mt-3 text-snow/80">All entries are encrypted, secure, and never sold.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-snow/70">
              <Lock className="w-5 h-5" />
              End-to-end encryption • Private by design
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
  <section id="get-started" className="py-16 sm:py-24 bg-snow">
      <div className="container-px mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-oxford">Start Building Emotional Clarity Today</h2>
          <div className="mt-6 flex justify-center">
            <StoreBadges />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-oxford text-snow">
      <div className="container-px mx-auto py-10 sm:py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="text-left">
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <Sparkles className="w-6 h-6 text-emerald" /> Ascenity
          </div>
          <p className="mt-2 text-snow/70">Emotional clarity, one step at a time.</p>
        </div>
        <div className="flex gap-6 justify-start sm:justify-center">
          <a className="text-snow/80 hover:text-white transition" href="#">Privacy Policy</a>
          <a className="text-snow/80 hover:text-white transition" href="#">Terms</a>
          <a className="text-snow/80 hover:text-white transition" href="#">Contact</a>
        </div>
        <div className="flex gap-4 justify-start sm:justify-end">
          <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://github.com/mutahir-muhammad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a className="p-2 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://www.linkedin.com/in/mutahir-muhammad235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-snow/60 text-sm pb-8">© {new Date().getFullYear()} Ascenity. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div>
      {/* Sticky header */}
      <div className="sticky top-0 z-40 backdrop-blur bg-snow/70 border-b border-oxford/10">
        <div className="container-px mx-auto flex items-center justify-between h-14">
          <a href="#home" className="font-extrabold text-oxford flex items-center gap-2"><Sparkles className="w-5 h-5 text-emerald" /> Ascenity</a>
          <nav className="hidden md:flex items-center gap-6 text-oxford/80">
            <a href="#challenge" className="hover:text-oxford transition">Challenge</a>
            <a href="#solution" className="hover:text-oxford transition">Solution</a>
            <a href="#science" className="hover:text-oxford transition">Science</a>
            <a href="#deep-dive" className="hover:text-oxford transition">Deep‑Dive</a>
            <a href="#features" className="hover:text-oxford transition">Features</a>
            <a href="#privacy" className="hover:text-oxford transition">Privacy</a>
            <a href="#get-started" className="px-3 py-1.5 rounded-md bg-honolulu text-white hover:shadow-soft transition">Get Started</a>
          </nav>
          <button
            className="md:hidden p-2 rounded-md hover:bg-oxford/5 text-oxford"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Scroll progress bar */}
        <ScrollProgress />
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
                className="fixed top-14 left-0 right-0 z-50 md:hidden"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className="mx-3 rounded-2xl border border-oxford/10 bg-snow shadow-float overflow-hidden">
                  <div className="flex flex-col py-2">
                    {[
                      { href: '#challenge', label: 'Challenge' },
                      { href: '#solution', label: 'Solution' },
                      { href: '#science', label: 'Science' },
                      { href: '#deep-dive', label: 'Deep‑Dive' },
                      { href: '#features', label: 'Features' },
                      { href: '#privacy', label: 'Privacy' },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 text-oxford/90 hover:bg-oxford/5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="px-3 pt-2 pb-3">
                      <a href="#get-started" onClick={() => setMobileOpen(false)} className="block text-center px-4 py-2 rounded-md bg-honolulu text-white">Get Started</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <Hero />
      <Problem />
      <Solution />
      <Science />
      <DeepDive />
      <Features />
      <Privacy />
      <FinalCTA />
      <Footer />
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div className="h-1 bg-gradient-to-r from-honolulu via-robin to-phthalo origin-left" style={{ scaleX }} />
  )
}