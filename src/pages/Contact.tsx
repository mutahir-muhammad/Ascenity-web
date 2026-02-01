import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, ArrowLeft, Send, MapPin, Clock, Sparkles } from 'lucide-react'
import { Reveal, Button, GlassCard, Footer } from '../components/ui'

export default function Contact() {
  return (
    <div className="min-h-screen bg-oxford">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="container-px flex items-center justify-between h-16 sm:h-18">
          <Link 
            to="/" 
            className="font-bold text-snow flex items-center gap-2 hover:text-robin transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden xs:inline">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/engine" className="text-snow/80 hover:text-snow transition text-sm sm:text-base">
              Engine
            </Link>
            <Link to="/reliv" className="text-snow/80 hover:text-snow transition text-sm sm:text-base">
              Reliv
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-py">
        <div className="container-px">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robin/10 border border-robin/20 mb-6">
                  <Mail className="w-4 h-4 text-robin" />
                  <span className="text-robin text-sm font-medium">Get in Touch</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-snow mb-6 leading-tight">
                  Let's Build Something{' '}
                  <span className="bg-gradient-to-r from-honolulu to-robin bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-snow/70 max-w-2xl mx-auto leading-relaxed">
                  Have questions about Ascenity Engine or Reliv? Want to collaborate or provide feedback? 
                  I'd love to hear from you!
                </p>
              </div>
            </Reveal>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Email */}
              <Reveal delay={0}>
                <motion.a
                  href="mailto:mutahir328@gmail.com"
                  className="block"
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="h-full text-center sm:text-left hover:border-honolulu/50">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center mx-auto sm:mx-0 mb-4">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-snow mb-2">Email</h3>
                    <p className="text-snow/70 text-sm break-all">mutahir328@gmail.com</p>
                    <p className="text-robin text-sm mt-3 font-medium">Click to send email →</p>
                  </GlassCard>
                </motion.a>
              </Reveal>

              {/* LinkedIn */}
              <Reveal delay={0.1}>
                <motion.a
                  href="https://www.linkedin.com/in/mutahir-muhammad235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="h-full text-center sm:text-left hover:border-honolulu/50">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-phthalo to-honolulu flex items-center justify-center mx-auto sm:mx-0 mb-4">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-snow mb-2">LinkedIn</h3>
                    <p className="text-snow/70 text-sm">Professional network</p>
                    <p className="text-robin text-sm mt-3 font-medium">Connect with me →</p>
                  </GlassCard>
                </motion.a>
              </Reveal>

              {/* GitHub */}
              <Reveal delay={0.2}>
                <motion.a
                  href="https://github.com/mutahir-muhammad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block sm:col-span-2 lg:col-span-1"
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="h-full text-center sm:text-left hover:border-honolulu/50">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-oxford to-phthalo flex items-center justify-center mx-auto sm:mx-0 mb-4 border border-robin/30">
                      <Github className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-snow mb-2">GitHub</h3>
                    <p className="text-snow/70 text-sm">Open source projects</p>
                    <p className="text-robin text-sm mt-3 font-medium">View my code →</p>
                  </GlassCard>
                </motion.a>
              </Reveal>
            </div>

            {/* Additional Info */}
            <Reveal delay={0.3}>
              <GlassCard className="mb-12 sm:mb-16">
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-robin/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-robin" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-snow mb-1">Location</h4>
                      <p className="text-snow/70 text-sm">Based in Pakistan, working globally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-honolulu/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-honolulu" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-snow mb-1">Response Time</h4>
                      <p className="text-snow/70 text-sm">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            {/* About Ascenity */}
            <Reveal delay={0.4}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-snow">About Ascenity</h2>
                    <p className="text-snow/60 text-sm">Engineering the future of health-tech</p>
                  </div>
                </div>
                <p className="text-snow/70 leading-relaxed mb-6">
                  Ascenity is dedicated to building innovative applications that improve mental wellness and health tracking. 
                  Our products, Ascenity Engine and Reliv, are designed with care to help people live healthier, more mindful lives.
                </p>
                <div className="flex flex-col xs:flex-row gap-4">
                  <Button to="/engine" variant="primary" className="flex-1 xs:flex-none">
                    Explore Engine
                  </Button>
                  <Button to="/reliv" variant="outline" className="flex-1 xs:flex-none">
                    Explore Reliv
                  </Button>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer dark />
    </div>
  )
}
