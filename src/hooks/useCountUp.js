import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

/**
 * Counts from `start` to `target` (eased, rAF-driven) once the element
 * scrolls into view. Returns a ref to attach and the current value.
 */
export function useCountUp(target, { duration = 1600, start = 0 } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!inView) return
    let raf
    const t0 = performance.now()

    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(start + (target - start) * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, start, duration])

  return { ref, value }
}
