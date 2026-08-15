import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Quote } from 'lucide-react'
import founderPhoto from '../assets/founder.webp'
import TextReveal from './TextReveal'
import '../styles/sections/Founder.css'

/* *Data ilustratif — ganti dengan data pendiri asli sebelum live */
const FOUNDER = {
  name: 'Erwin Alexander',
  role: 'Founder & CEO — PT Filosi Exider Inovasi',
  bio: [
    'Latar belakang pendiri, perjalanan awal, dan alasan mendirikan Erlex Foundation. Tulis biografi singkat di sini (*data ilustratif).',
    'Paragraf kedua: visi jangka panjang pendiri untuk pemerataan akses digital di wilayah 3T (*data ilustratif).',
  ],
  quote:
    'Kami tidak membawa teknologi untuk menjadi pahlawan — kami membawanya untuk dipakai, dipelajari, dan diturunkan oleh komunitas itu sendiri. (*kutipan ilustratif)',
}

const reveal = (reduceMotion) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
})

export default function Founder() {
  const reduceMotion = useReducedMotion()
  const item = reveal(reduceMotion)

  return (
    <section id="pendiri" className="section founder">
      <div className="container founder__grid">
        <FounderPhoto reduceMotion={reduceMotion} />

        <motion.div
          className="founder__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={item} className="eyebrow">
            Pendiri
          </motion.p>

          <motion.h2 variants={item} className="founder__heading">
            <TextReveal text="Sinyal berangkat dari satu orang yang percaya lebih dulu." />
          </motion.h2>

          <motion.div variants={item} className="founder__identity">
            <h3>{FOUNDER.name}</h3>
            <p>{FOUNDER.role}</p>
          </motion.div>

          {FOUNDER.bio.map((paragraph, i) => (
            <motion.p key={i} variants={item} className="founder__bio">
              {paragraph}
            </motion.p>
          ))}

          <motion.blockquote variants={item} className="founder__quote">
            <Quote size={22} strokeWidth={1.6} />
            <p>{FOUNDER.quote}</p>
          </motion.blockquote>

          <motion.p variants={item} className="founder__note">
            *Data ilustratif — nama, jabatan, biografi, dan kutipan akan diperbarui
            dengan data aktual.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const FounderPhoto = ({ reduceMotion }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -72])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110])

  return (
    <div className="founder__photo" ref={ref}>
      <motion.div className="founder__ring" style={{ y: ringY }} aria-hidden="true">
        <span className="founder__ring-dot" />
      </motion.div>

      <motion.div
        className="founder__frame"
        style={{ y }}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={founderPhoto}
          alt="Foto pendiri"
          className="founder__photo-img"
        />
      </motion.div>
    </div>
  )
}
