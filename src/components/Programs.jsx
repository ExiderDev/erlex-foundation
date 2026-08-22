import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Award, Backpack, HeartHandshake, Laptop } from 'lucide-react'
import '../styles/sections/Programs.css'

const PROGRAMS = [
  {
    icon: Award,
    title: 'Beasiswa Studi',
    body: 'Dukungan pendidikan bagi pelajar yang berada di wilayah 3T untuk menunjang keberlangsungan studi mereka.',
    reach: '64 penerima aktif',
  },
  {
    icon: Backpack,
    title: 'Bantuan Alat Sekolah',
    body: 'Menyalurkan tas dan alat sekolah bagi pelajar di sekolah-sekolah wilayah 3T yang membutuhkan.',
    reach: 'Disalurkan ke 40+ sekolah',
  },
  {
    icon: Laptop,
    title: 'Bantuan Laptop',
    body: 'Menyalurkan laptop bagi pelajar dan mahasiswa di sekolah serta kampus untuk mendukung proses belajar.',
    reach: 'Disalurkan ke 20+ sekolah & kampus',
  },
  {
    icon: HeartHandshake,
    title: 'Bantuan Kemanusiaan',
    body: 'Bantuan tanggap bagi komunitas terdampak bencana dan kondisi sulit di wilayah 3T.',
    reach: '10+ titik penyaluran',
  },
]

export default function Programs() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const headRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [travel, setTravel] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !headRef.current) return
      const t = trackRef.current.offsetWidth - headRef.current.offsetWidth
      setTravel(Math.max(0, t))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0px', '0px'] : ['0px', `-${travel}px`],
  )

  return (
    <section
      id="program"
      ref={sectionRef}
      className="programs"
    >
      <div className="programs__sticky">
        <div className="container programs__head" ref={headRef}>
          <p className="eyebrow">Program</p>
          <h2>Empat jalur, satu tujuan yang sama.</h2>
          <p>
            Setiap program dirancang untuk saling menopang — dari kebutuhan
            mendasar hingga peluang jangka panjang.
          </p>
        </div>

        <motion.div className="programs__track" ref={trackRef} style={{ x }}>
          {PROGRAMS.map(({ icon: Icon, title, body, reach }, i) => (
            <article key={title} className="program-card">
              <span className="program-card__n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="program-card__icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="program-card__reach">{reach}</span>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
