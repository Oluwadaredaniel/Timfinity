import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowLongRight } from 'react-icons/hi2'
import './CTA.css'

export default function CTA() {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    business: '',
    budget: '',
    callTime: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `🔥 New High-Intent Client - ${formData.name}`

    const body = `
🚀 NEW CLIENT LEAD SUBMISSION

━━━━━━━━━━━━━━━━━━━━
👤 PERSONAL INFO
━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━
💼 BUSINESS INFO
━━━━━━━━━━━━━━━━━━━━
Business Type: ${formData.business}
Monthly Ad Budget: ${formData.budget}

━━━━━━━━━━━━━━━━━━━━
📞 CALL AVAILABILITY
━━━━━━━━━━━━━━━━━━━━
Best Time for Call: ${formData.callTime}

━━━━━━━━━━━━━━━━━━━━
🧠 MESSAGE
━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━
⚡ GENERATED FROM TIMFINITY PORTFOLIO
    `

    window.location.href =
      `mailto:olufem97@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <motion.div className="cta-orb" style={{ y }} />

      <div className="container cta-inner">

        <span className="section-tag cta-tag">
          Let's Build Growth Systems
        </span>

        <h2 className="cta-title">
          Turn Your Traffic Into<br />
          <span className="cta-accent">Predictable Revenue</span>
        </h2>

        <p className="cta-sub">
          Fill this form so I can understand your business and build a
          strategy tailored to your growth.
        </p>

        {/* FORM */}
        <form className="cta-form" onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="website"
              placeholder="Website (optional)"
              onChange={handleChange}
            />

            <select name="business" onChange={handleChange} required>
              <option value="">Business Type</option>
              <option value="E-commerce">E-commerce</option>
              <option value="SaaS">SaaS</option>
              <option value="Info Product">Info Product</option>
              <option value="Local Business">Local Business</option>
              <option value="Other">Other</option>
            </select>

            <select name="budget" onChange={handleChange} required>
              <option value="">Monthly Ad Budget</option>
              <option value="$100 - $500">$100 - $500</option>
              <option value="$500 - $2,000">$500 - $2,000</option>
              <option value="$2,000 - $10,000">$2,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
            </select>

            {/* NEW FIELD — CALL TIME */}
            <select name="callTime" onChange={handleChange} required>
              <option value="">Best Time for a Call</option>
              <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
              <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
              <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
              <option value="Flexible / Anytime">Flexible / Anytime</option>
            </select>

          </div>

          <textarea
            name="message"
            placeholder="Tell me about your business, goals, and current challenges..."
            rows="5"
            onChange={handleChange}
            required
          />

          <motion.button
            type="submit"
            className="btn-primary cta-submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Strategy Request <HiArrowLongRight size={18} />
          </motion.button>

        </form>

      </div>
    </section>
  )
}