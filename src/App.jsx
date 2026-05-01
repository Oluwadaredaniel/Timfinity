import { ThemeProvider } from './context/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <Process />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  )
}