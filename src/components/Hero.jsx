import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLongRight } from 'react-icons/hi2'
import { TbChartLine, TbCurrencyDollar } from 'react-icons/tb'
import gsap from 'gsap'
import './Hero.css'

const words = ['I', 'Turn', 'Traffic', 'Into', 'Revenue.']
const accentWords = ['Revenue.']

const stats = [
  { value: '6+', label: 'Industries Scaled' },
  { value: '100%', label: 'Data-Driven' },
  { value: 'Zero', label: 'Guesswork' },
]

export default function Hero() {
  const wordsRef = useRef([])
  const subRef = useRef()
  const ctaRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.7 })

    tl.fromTo(
      wordsRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power4.out' }
    )
      .fromTo(
        subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        statsRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
  }, [])

  return (
    <section className="hero">
      {/* Background watermark */}
      <div className="hero-watermark" aria-hidden="true">OT</div>
      {/* Green glow orb */}
      <div className="hero-orb" aria-hidden="true" />

      <div className="hero-inner container">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <motion.span
            className="section-tag hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            E-Commerce Growth Marketer
          </motion.span>

          <h1 className="hero-title" aria-label="I Turn Traffic Into Revenue.">
            {words.map((word, i) => (
              <span key={word} className="word-wrap">
                <span
                  ref={el => (wordsRef.current[i] = el)}
                  className={`word ${accentWords.includes(word) ? 'accent' : ''}`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p ref={subRef} className="hero-sub">
            If your ads are getting clicks but not converting, you don't have
            a traffic problem — you have a strategy problem. I fix that with
            data-driven Google & Meta ad systems built to scale.
          </p>

          <div ref={ctaRef} className="hero-ctas">
            <a href="#cta" className="btn-primary">
              Book a Consultation <HiArrowLongRight size={18} />
            </a>
            <a href="#services" className="btn-ghost">
              See My Work
            </a>
          </div>

          <div ref={statsRef} className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Photo + floating cards */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Photo placeholder */}
          <div className="photo-frame">
            <div className="photo-placeholder">
              <div className="photo-icon">
                <span style={{ fontSize: '3rem' }}>👤</span>
                <p>Place your photo here</p>
                <span className="photo-hint">Recommended: square, high-res, plain background</span>
              </div>
            </div>
            {/* Corner accent */}
            <div className="frame-accent tl" />
            <div className="frame-accent br" />
          </div>

          {/* Floating metric card 1 */}
          <motion.div
            className="float-card float-card--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <TbChartLine size={16} color="var(--accent)" />
            <div>
              <p className="fc-val">6+ Industries</p>
              <p className="fc-label">Successfully Scaled</p>
            </div>
          </motion.div>

          {/* Floating metric card 2 */}
          <motion.div
            className="float-card float-card--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <TbCurrencyDollar size={16} color="var(--gold)" />
            <div>
              <p className="fc-val" style={{ color: 'var(--gold)' }}>ROI-First</p>
              <p className="fc-label">No vanity metrics</p>
            </div>
          </motion.div>

          {/* Decorative rings */}
          <div className="ring ring-1" />
          <div className="ring ring-2" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span />
      </motion.div>
    </section>
  )
}