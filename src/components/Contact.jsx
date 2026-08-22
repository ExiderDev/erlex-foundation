import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import '../styles/sections/Contact.css'

/**
 * Placeholder contact details — replace with the foundation's real
 * address, email, and phone before launch.
 */
const INFO = [
  { icon: MapPin, label: 'Alamat', value: 'Kupang, Nusa Tenggara Timur, Indonesia' },
  { icon: Mail, label: 'Email', value: 'hello@erlexfoundation.org' },
  { icon: Phone, label: 'Telepon / WhatsApp', value: '+62 812-3456-7890' },
  { icon: Clock, label: 'Jam layanan', value: 'Senin – Jumat, 09.00 – 17.00 WITA' },
]

export default function Contact() {
  const revealRef = useReveal()

  function handleSubmit(e) {
    // TODO: hook up to backend/email service (mis. Express + Nodemailer).
    e.preventDefault()
  }

  return (
    <section id="kontak" className="section contact">
      <div className="container">
        <div className="section-head">
          <h2>Mari berkolaborasi atau bertanya lebih lanjut.</h2>
          <p>
            Terbuka untuk kolaborasi program, liputan media, maupun pertanyaan
            calon relawan.
          </p>
        </div>

        <div ref={revealRef} className="reveal contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Nama</label>
              <input id="name" name="name" type="text" placeholder="Nama lengkap" required />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="nama@email.com" required />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" rows={4} placeholder="Tulis pesan Anda..." required />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              Kirim Pesan
            </button>
          </form>

          <div className="contact__side">
            <ul className="contact__info">
              {INFO.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <Icon size={18} strokeWidth={1.8} />
                  <div>
                    <span className="contact__info-label">{label}</span>
                    <span className="contact__info-value">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
