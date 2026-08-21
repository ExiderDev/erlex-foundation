import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Quote } from 'lucide-react'
import founderPhoto from '../assets/founder.webp'
import TextReveal from './TextReveal'
import '../styles/sections/Founder.css'

const FOUNDER = {
  name: 'Erwin Alexander',
  role: 'Founder & CEO — PT Filosi Exider Inovasi',
  bio: [
    'Semuanya berawal pada 2020, saat saya masih duduk di bangku kuliah dan mulai membantu teman-teman mahasiswa yang kesulitan dengan perangkat mereka. Saya tidak pernah menyangka uluran tangan sederhana itu menjadi cikal bakal Filosi. Semangat menolong itu terus tumbuh: pada 2021 kami membentuk tim dan membuka toko fisik Sherfis Tech Computer, sehingga makin banyak orang yang bisa kami layani. Pada 2022 kami mengikuti pelatihan eksternal agar bantuan yang kami berikan semakin baik.',
    'Tahun 2024 menjadi babak baru: kami melakukan rebranding menjadi PT Filosi Exider Inovasi, menegaskan komitmen untuk terus melayani dan membantu. Ekspansi ke pusat kota pada 2025 memperluas jangkauan layanan, hingga kini kami terus berkembang bersama Erlex Foundation, menyalurkan bantuan dan semangat saling membantu ke seluruh Indonesia.',
  ],
  quote:
    'Saya memulainya dari satu uluran tangan di bangku kuliah. Dan kami tidak akan berhenti selama masih ada orang yang membutuhkan.',
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
            <TextReveal text="Berawal dari satu uluran tangan." />
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
