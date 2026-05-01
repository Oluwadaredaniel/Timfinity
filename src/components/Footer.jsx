import './Footer.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">OT.</span>
          <p className="footer-tagline">E-commerce Growth Marketer</p>
        </div>

        <nav className="footer-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Oluwafemi Timothy
        </p>
      </div>
    </footer>
  )
}