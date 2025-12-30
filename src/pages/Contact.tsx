import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, ArrowLeft, Send } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cloud to-snow">
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur bg-snow/70 border-b border-oxford/10">
        <div className="container-px mx-auto flex items-center justify-between h-14">
          <Link to="/" className="font-extrabold text-oxford flex items-center gap-2 hover:text-honolulu transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/engine" className="text-oxford/80 hover:text-oxford transition">Engine</Link>
            <Link to="/reliv" className="text-oxford/80 hover:text-oxford transition">Reliv</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-px mx-auto py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-oxford mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-oxford/70 mb-12 leading-relaxed">
            Have questions about Ascenity Engine or Reliv? Want to collaborate or provide feedback? 
            I'd love to hear from you!
          </p>

          {/* Contact Cards */}
          <div className="grid gap-6 mb-12">
            {/* Email */}
            <motion.a
              href="mailto:mutahir328@gmail.com"
              className="card rounded-2xl border-2 border-oxford/10 bg-white p-8 hover:border-honolulu/30 transition-all duration-300"
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.15)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-honolulu to-robin flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-oxford mb-1">Email</h3>
                  <p className="text-oxford/70">mutahir328@gmail.com</p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/mutahir-muhammad235/"
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-2xl border-2 border-oxford/10 bg-white p-8 hover:border-honolulu/30 transition-all duration-300"
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.15)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-phthalo to-honolulu flex items-center justify-center">
                  <Linkedin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-oxford mb-1">LinkedIn</h3>
                  <p className="text-oxford/70">Connect on LinkedIn</p>
                </div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/mutahir-muhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-2xl border-2 border-oxford/10 bg-white p-8 hover:border-honolulu/30 transition-all duration-300"
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(2, 123, 206, 0.15)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-oxford to-phthalo flex items-center justify-center">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-oxford mb-1">GitHub</h3>
                  <p className="text-oxford/70">Check out my projects</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* About Section */}
          <motion.div
            variants={fadeUp}
            className="card rounded-2xl border border-oxford/10 bg-gradient-to-br from-white to-honolulu/5 p-8"
          >
            <h2 className="text-2xl font-bold text-oxford mb-4">About Ascenity</h2>
            <p className="text-oxford/70 leading-relaxed mb-4">
              Ascenity is dedicated to building innovative applications that improve mental wellness and health tracking. 
              Our products, Ascenity Engine and Reliv, are designed with care to help people live healthier, more mindful lives.
            </p>
            <div className="flex gap-4">
              <Link to="/engine">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-honolulu to-robin text-white font-bold rounded-xl hover:shadow-soft transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn about Engine
                </motion.button>
              </Link>
              <Link to="/reliv">
                <motion.button
                  className="px-6 py-3 bg-white border-2 border-honolulu text-honolulu font-bold rounded-xl hover:bg-honolulu/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn about Reliv
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-oxford text-snow border-t border-white/10 mt-20">
        <div className="container-px mx-auto py-8 text-center">
          <p className="text-snow/70 text-sm">© {new Date().getFullYear()} Ascenity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
