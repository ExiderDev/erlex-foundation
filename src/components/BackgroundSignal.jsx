import '../styles/layout/BackgroundSignal.css'

/**
 * Fixed backdrop layer: the "Peta Sinyal" network pattern (nodes + lines,
 * adapted from the logo motif) rendered as a tiled SVG, sitting behind
 * all sections (z-index: 0). Sections keep transparent backgrounds so the
 * pattern shows through everywhere.
 */
export default function BackgroundSignal() {
  return (
    <div className="bg-signal" aria-hidden="true">
      <svg className="bg-signal__svg">
        <defs>
          <pattern id="bs-lines" width="220" height="220" patternUnits="userSpaceOnUse">
            <g stroke="rgba(24, 58, 74, 0.09)" strokeWidth="1" fill="none">
              <path d="M44 44 L154 66" />
              <path d="M66 154 L44 44" opacity="0.6" />
              <path d="M154 66 L110 154" opacity="0.6" />
              <path d="M176 22 L88 198" opacity="0.35" />
            </g>
          </pattern>
          <pattern id="bs-nodes" width="220" height="220" patternUnits="userSpaceOnUse">
            <circle cx="44" cy="44" r="3" fill="rgba(34, 169, 154, 0.4)" />
            <circle cx="154" cy="66" r="2.2" fill="rgba(24, 58, 74, 0.45)" />
            <circle cx="110" cy="154" r="2.4" fill="rgba(34, 169, 154, 0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bs-lines)" />
        <rect width="100%" height="100%" fill="url(#bs-nodes)" />
      </svg>
      <div className="bg-signal__shade" />
    </div>
  )
}
