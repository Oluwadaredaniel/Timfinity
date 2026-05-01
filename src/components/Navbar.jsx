import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { useTheme } from '../context/useTheme'
import gsap from 'gsap'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: -72, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 }
    )
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={ref} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">OT.</a>

        <nav className="nav-links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark'
              ? <HiOutlineSun size={17} />
              : <HiOutlineMoon size={17} />}
          </button>
          <a href="#cta" className="btn-primary nav-cta">Book a Call</a>
          <button className="hamburger" onClick={() => setOpen(o => !o)}>
            {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="mobile-cta" onClick={() => setOpen(false)}>
              Book a Call →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}