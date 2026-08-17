import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { useCountUp } from '../hooks/useCountUp'
import '../styles/sections/Impact.css'

const STEPS = [
  {
    n: '01',
    title: 'Akses',
    body: 'Menyalurkan tas dan laptop ke sekolah serta kampus yang paling membutuhkan.',
  },
  {
    n: '02',
    title: 'Belajar',
    body: 'Pendampingan literasi digital dan pelatihan keterampilan yang relevan dengan kebutuhan lokal.',
  },
  {
    n: '03',
    title: 'Berdaya',
    body: 'Peserta mulai memakai keterampilan baru untuk belajar, bekerja, atau membuka usaha kecil.',
  },
  {
    n: '04',
    title: 'Berbagi',
    body: 'Peserta terlatih menjadi fasilitator bagi lingkungan sekitar, memperluas dampak tanpa kami hadir langsung.',
  },
]

const STATS = [
  { value: 2300, suffix: '+', label: 'Penerima manfaat' },
  { value: 48, suffix: '', label: 'Sekolah & kampus mitra' },
  { value: 120, suffix: '+', label: 'Fasilitator lokal terlatih' },
  { value: 12, suffix: '', label: 'Provinsi terjangkau' },
]

function formatNumber(value) {
  return new Intl.NumberFormat('id-ID').format(value)
}

export default function Impact() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const indexLabel = useTransform(scrollYProgress, (v) =>
    String(Math.min(STEPS.length, Math.floor(v * STEPS.length) + 1)).padStart(2, '0'),
  )

  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="dampak" className="impact">
      <div ref={sectionRef} className="impact__pin" style={{ height: '360vh' }}>
        <div className="impact__sticky">
        <div className="container impact__head">
          <p className="eyebrow">Dampak</p>
          <h2>Perjalanan yang kami bangun bersama komunitas.</h2>
          <p>
            Bukan program sekali jalan — setiap tahap dirancang agar dampaknya
            terus bergulir setelah kami pulang.
          </p>
        </div>

        <ol className="container impact__steps">
          {STEPS.map((step, i) => (
            <Step
              key={step.n}
              step={step}
              index={i}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>

        <div className="container impact__progress">
          <motion.div className="impact__progress-track">
            <motion.span style={{ scaleX: reduceMotion ? 1 : barScaleX }} />
          </motion.div>
          <div className="impact__progress-count">
            <motion.span>{reduceMotion ? STEPS.length.toString().padStart(2, '0') : indexLabel}</motion.span>
            <span> / {STEPS.length.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      </div>

      <motion.div
        className="impact__stats-wrap"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container impact__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="impact__stat">
              <StatValue value={stat.value} suffix={stat.suffix} />
              <span className="impact__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="container impact__note">
          *Data ilustratif untuk keperluan tampilan, akan diperbarui dengan data aktual.
        </p>
      </motion.div>
    </section>
  )
}

const Step = ({ step, index, progress, reduceMotion }) => {
  const start = index * 0.2
  const end = start + 0.13

  const opacity = useTransform(progress, [start, end], [0.16, 1])
  const y = useTransform(progress, [start, end], [20, 0])
  const numColor = useTransform(progress, [start, end], ['rgba(24, 58, 74, 0.2)', '#22a99a'])

  return (
    <motion.li
      className="impact__step"
      style={reduceMotion ? undefined : { opacity, y }}
    >
      <span
        className="impact__step-n"
        style={reduceMotion ? undefined : { color: numColor }}
      >
        {step.n}
      </span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </motion.li>
  )
}

const StatValue = ({ value, suffix }) => {
  const { ref, value: count } = useCountUp(value)

  return (
    <span ref={ref} className="impact__stat-value">
      {formatNumber(Math.round(count))}
      {suffix}
    </span>
  )
}
