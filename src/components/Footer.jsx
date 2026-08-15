import '../styles/layout/Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" width="24" height="24">
              <circle cx="6" cy="14" r="3" fill="currentColor" />
              <circle cx="22" cy="6" r="3" fill="currentColor" />
              <circle cx="22" cy="22" r="3" fill="currentColor" />
              <path d="M9 14 L19 6 M9 14 L19 22" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
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
