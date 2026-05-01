import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Audit & Strategy',
    desc: 'Analyze your product, audience, current performance, and competitive gaps. We build the roadmap before spending a single dime.',
  },
  {
    num: '02',
    title: 'Launch & Test',
    desc: 'Run targeted campaigns across angles, creatives, and audiences to find what resonates. Speed is everything in the testing phase.',
  },
  {
    num: '03',
    title: 'Optimize',
    desc: 'Cut ad spend that isn\'t converting. Refine targeting, improve landing pages, and sharpen copy until the funnel converts predictably.',
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'Once the winning formula is proven, we scale aggressively — increasing spend on what works to maximize your return on ad spend.',
  },
]

export default function Process() {
  const sectionRef = useRef()
  const stepRefs = useRef([])
  const lineRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical connector line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.4, ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 70%',
          },
        }
      )

      // Each step fades + slides in
      stepRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="container">
        <span className="section-tag">How I Work</span>
        <h2 className="process-title">
          A System Built<br />
          <span style={{ color: 'var(--accent)' }}>to Scale</span>
        </h2>
        <p className="process-sub">
          Four clear stages. No guesswork. A repeatable path from first impression to consistent revenue.
        </p>

        <div className="process-timeline">
          <div className="timeline-line" ref={lineRef} />

          {steps.map((s, i) => (
            <div
              key={s.num}
              ref={el => (stepRefs.current[i] = el)}
              className={`process-step ${i % 2 === 0 ? 'step-left' : 'step-right'}`}
            >
              {/* This dot stays in the middle column via CSS order */}
              <div className="step-dot">
                <span>{s.num}</span>
              </div>

              {/* This content stays in the left or right column */}
              <div className="step-content">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>

              {/* This placeholder ensures the 3-column grid logic works perfectly */}
              <div className="step-empty" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}