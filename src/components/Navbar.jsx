import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/dist/lenis-react'
import '../styles/layout/Navbar.css'

const LINKS = [
  { href: '#pendiri', label: 'Pendiri' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#program', label: 'Program' },
  { href: '#dampak', label: 'Dampak' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor || !lenis) return
      const target = document.getElementById(anchor.getAttribute('href').slice(1))
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -80, lerp: 0.08 })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onAnchorClick)
    }
  }, [lenis])

  return (
    <div className="nav-wrap">
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" width="28" height="28">
              <circle cx="6" cy="14" r="3" fill="currentColor" />
              <circle cx="22" cy="6" r="3" fill="currentColor" />
              <circle cx="22" cy="22" r="3" fill="currentColor" />
              <path
                d="M9 14 L19 6 M9 14 L19 22"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          </span>
          Erlex Foundation
        </a>

        <ul
          className="nav__links"
          aria-label="Navigasi utama"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {LINKS.map((link) => (
            <li
              key={link.href}
              className="nav__link"
              onMouseEnter={(e) => {
                const { offsetLeft, offsetWidth } = e.currentTarget
                setPosition({
                  left: offsetLeft - 12,
                  width: offsetWidth + 24,
                  opacity: 1,
                })
              }}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <motion.li
            className="nav__cursor"
            animate={position}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        </ul>

        <button
          className="nav__burger"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#donasi" className="btn btn-primary" onClick={() => setOpen(false)}>
            Donasi Sekarang
          </a>
        </div>
      )}
      </header>

      <a href="#donasi" className="btn btn-primary nav__cta">
        Donasi Sekarang
      </a>
    </div>
  )
}
