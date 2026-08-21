import { Signal, GraduationCap, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import TextReveal from './TextReveal'
import filosilaptop from '../assets/logo/filosilaptop.webp'
import ifilosi from '../assets/logo/ifilosi.webp'
import logosi from '../assets/logo/logosi.webp'
import filosigrup from '../assets/logo/filosigrup.webp'
import '../styles/sections/About.css'

const PILLARS = [
  {
    icon: Signal,
    title: 'Aksesibilitas',
    body: 'Menyalurkan tas, alat sekolah, dan kebutuhan belajar ke sekolah serta kampus yang selama ini berada di luar peta jangkauan bantuan.',
  },
  {
    icon: GraduationCap,
    title: 'Ketepatan',
    body: 'Bantuan disusun bersama komunitas dan sekolah setempat agar benar-benar sesuai kebutuhan — bukan sekadar dibagikan lalu ditinggalkan.',
  },
  {
    icon: Users,
    title: 'Keberlanjutan',
    body: 'Setiap bantuan diupayakan sampai ke tangan yang tepat, dan semangat berbagi terus hidup jauh setelah tim kami pulang.',
  },
]

const PARTNERS = [
  { name: 'Filosi Laptop', img: filosilaptop },
  { name: 'iFilosi', img: ifilosi },
  { name: 'Logosi', img: logosi },
  { name: 'Filosi Grup', img: filosigrup },
]

export default function About() {
  const revealRef = useReveal()
  const partnersRef = useReveal()

  return (
    <section id="tentang" className="section about">
      <div className="container">
        <p className="eyebrow about__eyebrow">Tentang</p>
        <h2 className="about__statement">
          <TextReveal text="Bantuan seharusnya menjangkau semua orang — bukan hanya mereka yang mudah dijangkau." />
        </h2>

        <div className="about__text">
          <p>
            Erlex Foundation adalah yayasan sosial yang lahir dari niat untuk
            berbagi — didirikan di bawah{' '}
            <strong>PT Filosi Exider Inovasi</strong>. Kami menyalurkan tas, alat
            sekolah, laptop, dan beasiswa bagi komunitas di wilayah 3T
            (Tertinggal, Terdepan, Terluar) yang membutuhkan.
          </p>
          <p>
            Kami percaya setiap anak berhak bersekolah dengan bahagia — dan tidak
            ada orang yang terlalu jauh untuk diperhatikan.
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

        <div ref={partnersRef} className="reveal about__partners">
          <h2 className="about__partners-label">Mitra Kami</h2>
          <ul className="about__partners-list">
            {PARTNERS.map(({ name, img }) => (
              <li key={name} className="about__partners-item">
                <img src={img} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
