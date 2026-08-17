import logoMaskot from '../assets/logo/LogoMaskotBiru.webp'
import '../styles/layout/Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            <img src={logoMaskot} alt="" />
          </span>
          <div>
            <p className="footer__name">Erlex Foundation</p>
            <p className="footer__parent">Yayasan di bawah PT Filosi Exider Inovasi</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Tautan footer">
          <a href="#tentang">Tentang</a>
          <a href="#program">Program</a>
          <a href="#dampak">Dampak</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© {YEAR} Erlex Foundation. Seluruh hak cipta dilindungi.</p>
        <p>Dikelola oleh PT Filosi Exider Inovasi.</p>
      </div>
    </footer>
  )
}
