import { Signal, GraduationCap, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import TextReveal from './TextReveal'
import '../styles/sections/About.css'

const PILLARS = [
  {
    icon: Signal,
    title: 'Aksesibilitas',
    body: 'Menyalurkan tas, laptop, dan alat sekolah ke sekolah serta kampus yang selama ini berada di luar peta jangkauan bantuan.',
  },
  {
    icon: GraduationCap,
    title: 'Kapasitas',
    body: 'Literasi digital dan pelatihan teknis yang disusun bersama komunitas, bukan sekadar dibagikan lalu ditinggalkan.',
  },
  {
    icon: Users,
    title: 'Keberlanjutan',
    body: 'Melatih fasilitator lokal agar setiap program tetap hidup dan bertumbuh jauh setelah tim kami pulang.',
  },
]

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="tentang" className="section about">
      <div className="container">
        <p className="eyebrow about__eyebrow">Tentang</p>
        <h2 className="about__statement">
          <TextReveal text="Teknologi seharusnya menjangkau semua orang — bukan hanya yang sudah terhubung." />
        </h2>

        <div className="about__text">
          <p>
            Erlex Foundation adalah yayasan sosial yang dibentuk di bawah{' '}
            <strong>PT Filosi Exider Inovasi</strong>. Kami menyalurkan keahlian
            teknis perusahaan ke bentuk yang paling dibutuhkan komunitas di
            wilayah 3T (Tertinggal, Terdepan, Terluar): bantuan, literasi, dan
            peluang di dunia digital.
          </p>
          <p>
            Kami percaya kesenjangan digital bukan hanya soal perangkat —
            tapi juga soal siapa yang tahu cara memakainya untuk berkembang.
          </p>
        </div>

        <div ref={revealRef} className="reveal about__pillars">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="pillar">
              <div className="pillar__icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
