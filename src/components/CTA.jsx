import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowLongRight } from 'react-icons/hi2'
import './CTA.css'

export default function CTA() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <motion.div className="cta-orb" style={{ y }} />
      <div className="container cta-inner">
        <span className="section-tag cta-tag">Let's Work Together</span>
        <h2 className="cta-title">
          Ready to Turn Your Ads<br />
          Into a <span className="cta-accent">Sales Machine?</span>
        </h2>
        <p className="cta-sub">
          Let's build a system that attracts the right audience, converts them
          into buyers, and scales profitably — consistently.
        </p>

        <div className="cta-actions">
          <motion.a
            href="mailto:your@email.com"
            className="btn-primary cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Consultation <HiArrowLongRight size={18} />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            className="btn-ghost"
            whileHover={{ scale: 1.02 }}
          >
            Send a Message
          </motion.a>
        </div>

        <div className="cta-contact">
          <a href="mailto:your@email.com" className="cta-link">your@email.com</a>
          <span className="cta-sep" />
          <a href="tel:+234000000000" className="cta-link">+234 XXX XXX XXXX</a>
          <span className="cta-sep" />
          <span className="cta-avail">Available Worldwide · Remote</span>
        </div>
      </div>
    </section>
  )
}