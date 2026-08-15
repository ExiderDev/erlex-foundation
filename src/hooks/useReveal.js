import { useEffect, useRef } from 'react'

/**
 * Adds the `.is-visible` class to the element once it scrolls into view.
 * Pair with the `.reveal` utility class defined in styles/index.css.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => node.classList.toggle('is-visible', entry.isIntersecting),
      { threshold: 0.15, ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
