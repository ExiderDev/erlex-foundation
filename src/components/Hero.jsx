import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import galleryImage from '../assets/gambar/gambar5.webp'
import '../styles/sections/Hero.css'

const STATS = [
  { value: '48', label: 'Sekolah & kampus mitra' },
  { value: '2.300+', label: 'Penerima manfaat' },
  { value: '12', label: 'Provinsi terjangkau' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-parallax">
        <StickyImage />
        <OverlayCopy />
      </div>
    </section>
  )
}

const StickyImage = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      className="hero-sticky"
      style={{
        backgroundImage: `url(${galleryImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        scale,
      }}
      ref={targetRef}
    >
      <motion.div className="hero-sticky__overlay" style={{ opacity }} />
    </motion.div>
  )
}

const OverlayCopy = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -250])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0])

  return (
    <motion.div
      className="hero-copy"
      style={{ y, opacity }}
      ref={targetRef}
    >
      <h1 className="hero-copy__title">Hidup untuk menghidupi.</h1>
      <p className="hero-copy__subtitle">Erwin Alexander Foundation</p>
    </motion.div>
  )
}

const HeroContent = () => {
  return (
    <div className="hero-content">v
      <div className="container">
        <div className="hero-content__actions">
          <a href="#donasi" className="btn btn-primary">
            Donasi Sekarang
          </a>
          <a href="#program" className="btn btn-outline">
            Lihat Program Kami
          </a>
        </div>

        <dl className="hero-content__stats">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}