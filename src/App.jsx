import Navbar from './components/Navbar'
import BackgroundSignal from './components/BackgroundSignal'
import Hero from './components/Hero'
import Founder from './components/Founder'
import About from './components/About'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  return (
    <div className="site">
      <BackgroundSignal />
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <About />
        <Programs />
        <Impact />
        <Gallery />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
