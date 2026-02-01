import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Menu, X, Github, Linkedin, Mail } from 'lucide-react'

// Animation Variants
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Reveal Component for scroll animations
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Button Component with proper touch targets
export function Button({
  variant = 'primary',
  size = 'default',
  children,
  href,
  to,
  className = '',
  ...props
}: {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  [key: string]: unknown;
}) {
  const baseStyles = "min-h-[44px] font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-robin focus-visible:ring-offset-2"
  
  const variants = {
    primary: "bg-gradient-to-r from-honolulu to-robin text-white shadow-soft hover:shadow-float hover:scale-[1.02] active:scale-[0.98]",
    outline: "border-2 border-robin text-robin hover:bg-robin/10 active:bg-robin/20",
    ghost: "text-snow/80 hover:text-snow hover:bg-white/10",
    secondary: "bg-white/10 text-snow hover:bg-white/20 border border-white/20",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to}>
        <motion.span
          className={combinedStyles}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Glassmorphic Card Component
export function GlassCard({ 
  children, 
  className = '',
  dark = true,
  hover = true,
}: { 
  children: React.ReactNode; 
  className?: string;
  dark?: boolean;
  hover?: boolean;
}) {
  const baseStyles = dark 
    ? "bg-oxford/90 backdrop-blur-md border border-robin/20 rounded-2xl p-6"
    : "bg-white/90 backdrop-blur-md border border-oxford/10 rounded-2xl p-6"
  
  const hoverStyles = hover ? "hover:border-robin/40 hover:shadow-lg hover:shadow-robin/10 transition-all duration-300" : ""
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

// Section Header Component
export function SectionHeader({ 
  overline, 
  title, 
  subtitle, 
  dark = false,
  centered = true,
}: { 
  overline?: string; 
  title: string; 
  subtitle?: string; 
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12 sm:mb-16`}>
      {overline && (
        <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-robin' : 'text-honolulu'}`}>
          {overline}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance ${dark ? 'text-snow' : 'text-oxford'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg sm:text-xl leading-relaxed ${dark ? 'text-snow/80' : 'text-oxford/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Navigation Component
interface NavProps {
  dark?: boolean;
  logo?: React.ReactNode;
  links?: { label: string; href: string; external?: boolean }[];
  cta?: { label: string; href: string };
}

export function Navigation({ dark = true, logo, links = [], cta }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className={`sticky top-0 z-50 ${dark ? 'glass-nav' : 'backdrop-blur-md bg-snow/80 border-b border-oxford/10'}`}>
        <div className="container-px flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
            {logo || (
              <>
                <Sparkles className={`w-7 h-7 ${dark ? 'text-robin' : 'text-honolulu'}`} />
                <span className={dark ? 'text-snow' : 'text-oxford'}>Ascenity</span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors ${dark ? 'text-snow/80 hover:text-snow' : 'text-oxford/80 hover:text-oxford'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors ${dark ? 'text-snow/80 hover:text-snow' : 'text-oxford/80 hover:text-oxford'}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-medium transition-colors ${dark ? 'text-snow/80 hover:text-snow' : 'text-oxford/80 hover:text-oxford'}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            {cta && (
              <Button variant="primary" size="sm" href={cta.href}>
                {cta.label}
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${dark ? 'text-snow hover:bg-white/10' : 'text-oxford hover:bg-oxford/5'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-oxford/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Menu */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-oxford border-l border-robin/20 p-6 pt-20"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xl font-medium text-snow/80 hover:text-snow py-3 border-b border-white/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xl font-medium text-snow/80 hover:text-snow py-3 border-b border-white/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-xl font-medium text-snow/80 hover:text-snow py-3 border-b border-white/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {cta && (
                <div className="mt-4">
                  <Button variant="primary" href={cta.href} className="w-full">
                    {cta.label}
                  </Button>
                </div>
              )}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </>
  )
}

// Footer Component
interface FooterProps {
  dark?: boolean;
  logo?: React.ReactNode;
  tagline?: string;
  links?: { label: string; href: string }[];
}

export function Footer({ 
  dark = true, 
  logo,
  tagline = "Engineering the Future of Health-Tech",
  links = [
    { label: 'Ascenity Engine', href: '/engine' },
    { label: 'Reliv', href: '/reliv' },
    { label: 'Contact', href: '/contact' },
  ],
}: FooterProps) {
  return (
    <footer className={`${dark ? 'bg-oxford border-t border-white/10' : 'bg-snow border-t border-oxford/10'}`}>
      <div className="container-px py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl mb-4">
              {logo || (
                <>
                  <Sparkles className={`w-7 h-7 ${dark ? 'text-robin' : 'text-honolulu'}`} />
                  <span className={dark ? 'text-snow' : 'text-oxford'}>Ascenity</span>
                </>
              )}
            </Link>
            <p className={`text-sm ${dark ? 'text-snow/70' : 'text-oxford/70'}`}>
              {tagline}
            </p>
            <p className={`mt-2 text-sm ${dark ? 'text-snow/50' : 'text-oxford/50'}`}>
              Founded by{' '}
              <a 
                href="https://github.com/mutahir-muhammad" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${dark ? 'text-robin hover:underline' : 'text-honolulu hover:underline'}`}
              >
                Muhammad Mutahir
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`transition-colors ${dark ? 'text-snow/80 hover:text-snow' : 'text-oxford/80 hover:text-oxford'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4 sm:justify-end">
            <a
              href="https://github.com/mutahir-muhammad"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${dark ? 'bg-white/10 hover:bg-robin/20 text-snow' : 'bg-oxford/5 hover:bg-oxford/10 text-oxford'}`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mutahir-muhammad235/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${dark ? 'bg-white/10 hover:bg-robin/20 text-snow' : 'bg-oxford/5 hover:bg-oxford/10 text-oxford'}`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Mutahir328@gmail.com"
              className={`p-3 rounded-lg transition-colors ${dark ? 'bg-white/10 hover:bg-robin/20 text-snow' : 'bg-oxford/5 hover:bg-oxford/10 text-oxford'}`}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-6 border-t ${dark ? 'border-white/10 text-snow/50' : 'border-oxford/10 text-oxford/50'} text-center text-sm`}>
          © {new Date().getFullYear()} Ascenity.dev. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
