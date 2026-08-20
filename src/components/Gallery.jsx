import { useRef } from 'react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import { MapPin } from 'lucide-react'
import galleryA from '../assets/gambar/gambar.webp'
import galleryB from '../assets/gambar/gambar3.webp'
import galleryC from '../assets/gambar/gambar4.webp'
import galleryD from '../assets/gambar/gambar6.webp'
import galleryCenter from '../assets/image.webp'
import '../styles/sections/Gallery.css'

const IMAGES = [
  {
    src: galleryA,
    alt: 'Dokumentasi kegiatan Erlex Foundation',
    start: -200,
    end: 200,
    className: 'gallery-img--a',
  },
  {
    src: galleryB,
    alt: 'Dokumentasi kegiatan Erlex Foundation',
    start: 200,
    end: -250,
    className: 'gallery-img--b',
  },
  {
    src: galleryC,
    alt: 'Dokumentasi kegiatan Erlex Foundation',
    start: -200,
    end: 200,
    className: 'gallery-img--c',
  },
  {
    src: galleryD,
    alt: 'Dokumentasi kegiatan Erlex Foundation',
    start: 0,
    end: -500,
    className: 'gallery-img--d',
  },
]

const ITEMS = [
  'Penyerahan Bantuan di Desa Oesao',
  'Penyerahan Beasiswa Pendidikan',
  'Penyerahan Tas & Laptop di Sekolah',
  'Penyerahan Alat Sekolah di Desa',
  'Penyerahan Bantuan di Sekolah',
  'Penyaluran Bantuan Bersama Komunitas',
]

export default function Gallery() {
  const heroRef = useRef(null)

  return (
    <section id="galeri" className="gallery">
      <div className="gallery-hero" ref={heroRef}>
        <CenterImage heroRef={heroRef} />
        <ParallaxImages />
        <div className="gallery-fade" aria-hidden="true" />
      </div>

      <GalleryList />
    </section>
  )
}

const CenterImage = ({ heroRef }) => {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  })

  const clip1 = useTransform(scrollYProgress, [0, 0.75], [25, 0])
  const clip2 = useTransform(scrollYProgress, [0, 0.75], [75, 100])

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 0.75],
    ['170%', '100%'],
  )
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  return (
    <motion.div
      className="gallery-center"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${galleryCenter})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}

const ParallaxImages = () => {
  return (
    <div className="gallery-parallax">
      {IMAGES.map((img) => (
        <ParallaxImg key={img.className} {...img} />
      ))}
    </div>
  )
}

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  })

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])

  const y = useTransform(scrollYProgress, [0, 1], [start, end])
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`gallery-img ${className}`}
      ref={ref}
      style={{ transform, opacity }}
    />
  )
}

const GalleryList = () => {
  return (
    <div className="gallery-list">
      <motion.h3
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="gallery-list__heading"
      >
        Dari Lapangan, Bukan dari Studio
      </motion.h3>
      {ITEMS.map((caption) => (
        <GalleryItem key={caption} caption={caption} />
      ))}
    </div>
  )
}

const GalleryItem = ({ caption }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="gallery-item"
    >
      <div>
        <p className="gallery-item__title">{caption}</p>
        <p className="gallery-item__sub">Dokumentasi kegiatan</p>
      </div>
      <div className="gallery-item__meta">
        <p>Wilayah 3T</p>
        <MapPin />
      </div>
    </motion.div>
  )
}