import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import '../styles/components/TextReveal.css'

/**
 * Scroll-driven statement reveal (the TeamUSA triple-layer wipe):
 * base (dim) / reveal (full ink) / flash (teal→navy gradient) stacked
 * exactly, then clipped open left→right by scroll progress.
 * With reduced motion, the reveal layer renders fully visible instead.
 */
export default function TextReveal({ text, className = '' }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })

  const reveal = useTransform(scrollYProgress, [0, 1], [0, 100])
  const flash = useTransform(scrollYProgress, [0.12, 1], [0, 100])

  const clipReveal = useMotionTemplate`inset(0 ${100 - reveal}% 0 0)`
  const clipFlash = useMotionTemplate`inset(0 ${100 - flash}% 0 0)`

  return (
    <span ref={ref} className={`text-reveal ${className}`}>
      <span className="text-reveal__layer text-reveal__base" aria-hidden="true">
        {text}
      </span>
      <motion.span
        className="text-reveal__layer text-reveal__reveal"
        aria-hidden="true"
        style={reduceMotion ? undefined : { clipPath: clipReveal }}
      >
        {text}
      </motion.span>
      {!reduceMotion && (
        <motion.span
          className="text-reveal__layer text-reveal__flash"
          aria-hidden="true"
          style={{ clipPath: clipFlash }}
        >
          {text}
        </motion.span>
      )}
    </span>
  )
}
