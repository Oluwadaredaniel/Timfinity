import { motion } from 'framer-motion'
import './Industries.css'

const industries = [
  { label: 'E-commerce', tag: 'Core Focus' },
  { label: 'Edu-Tech', tag: 'Enrollments' },
  { label: 'Gadgets & Accessories', tag: 'Must-Have' },
  { label: 'Jewelry Brands', tag: 'Emotion-Driven' },
  { label: 'Fashion & Clothing', tag: 'Visibility' },
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <span className="section-tag">Industries</span>
        <h2 className="ind-title">Markets I've Scaled In</h2>
        <p className="ind-sub">
          Different products. Different audiences. Same obsession with results.
        </p>

        <div className="ind-grid">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              className="ind-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ borderColor: 'var(--accent)', y: -4 }}
            >
              <span className="ind-dot" />
              <span className="ind-label">{ind.label}</span>
              <span className="ind-tag">{ind.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}