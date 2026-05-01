import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    num: '01',
    title: 'Results Over Vanity',
    desc: 'Impressions don\'t pay bills. I measure success by what lands in your account — not dashboard screenshots.',
  },
  {
    num: '02',
    title: 'Test Fast. Scale Harder.',
    desc: 'I find winning ad angles quickly, cut what isn\'t working, and pour fuel on what is — before your competitors catch on.',
  },
  {
    num: '03',
    title: 'Multi-Industry Fluency',
    desc: 'Different products, different buyers, different psychology. I understand how to speak to each audience.',
  },
]

export default function About() {
  const containerRef = useRef()
  const titleRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 82%' },
        }
      )

      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current[0], start: 'top 80%' },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about section" id="about" ref={containerRef}>
      <div className="container">
        <span className="section-tag">About</span>

        <div className="about-grid">
          <div className="about-left">
            <h2 ref={titleRef} className="about-title">
              Performance-Driven.<br />
              Data-Backed.<br />
              <span className="accent-text">Revenue-Obsessed.</span>
            </h2>
            <p className="about-body">
              I'm Oluwafemi Timothy — a digital marketer with one focus: growing
              your revenue through ad systems that actually work.
            </p>
            <p className="about-body">
              With hands-on experience across multiple industries, I understand
              what makes people click, trust, and ultimately buy. Every decision
              I make is backed by data, testing, and proven marketing principles
              — not gut feelings or trends.
            </p>
            <blockquote className="about-quote">
              "From launching new products to scaling established brands, I build
              systems that consistently turn ad spend into profit."
            </blockquote>
          </div>

          <div className="about-right">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                ref={el => (cardsRef.current[i] = el)}
                className="pillar-card"
              >
                <span className="pillar-num">{p.num}</span>
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}