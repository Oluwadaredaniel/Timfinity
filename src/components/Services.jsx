import { motion } from 'framer-motion'
import { TbBrandGoogle, TbBrandMeta, TbChartArrowsVertical, TbTargetArrow } from 'react-icons/tb'
import './Services.css'

const services = [
  {
    num: '01',
    icon: <TbBrandGoogle size={28} />,
    title: 'Google Ads',
    subtitle: 'High-Intent Sales',
    desc: 'Capture ready-to-buy customers actively searching for your product. Every search is a warm lead — I make sure they land on you, not your competitor.',
  },
  {
    num: '02',
    icon: <TbBrandMeta size={28} />,
    title: 'Meta Ads',
    subtitle: 'Facebook & Instagram',
    desc: 'Scroll-stopping creatives paired with high-converting funnels. I turn cold audiences into loyal customers through precise targeting and buyer psychology.',
  },
  {
    num: '03',
    icon: <TbChartArrowsVertical size={28} />,
    title: 'E-commerce Scaling',
    subtitle: 'Consistent Daily Sales',
    desc: 'From product testing to scaling winning campaigns — I build systems that generate consistent daily sales, not one-off spikes that die after a week.',
  },
  {
    num: '04',
    icon: <TbTargetArrow size={28} />,
    title: 'Conversion Optimization',
    subtitle: 'Max Every Click',
    desc: 'Traffic without conversion is just noise. I optimize your funnel, landing pages, and offers to squeeze maximum revenue from every click you already pay for.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-tag">What I Do</span>
        <div className="services-header">
          <h2 className="services-title">
            Four Ways I Grow<br />Your Revenue
          </h2>
          <p className="services-sub">
            Every service is built around one outcome — turning your ad spend into
            measurable, scalable profit.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="service-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <span className="card-bg-num" aria-hidden="true">{s.num}</span>
              <div className="card-icon">{s.icon}</div>
              <div className="card-body">
                <p className="card-subtitle">{s.subtitle}</p>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
              </div>
              <div className="card-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}