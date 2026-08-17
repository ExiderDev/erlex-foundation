# AGENTS.md — Erlex Foundation

Pedoman untuk AI agent yang bekerja di repositori ini.

## Perintah & Verifikasi

- **Jangan jalankan `npm run build` setiap selesai mengubah kode.** Cukup pastikan perubahan masuk akal secara sintaks; verifikasi visual dilakukan lewat `npm run dev`.
- Jalankan `npm run build` hanya jika diminta eksplisit atau saat memverifikasi hasil produksi.
- Dev server: `npm run dev` (http://localhost:5173).

## Proyek

Landing page React + Vite untuk Erlex Foundation (yayasan sosial di bawah PT Filosi Exider Inovasi). Bahasa antarmuka: Indonesia.

- Stack: React 18, Vite, `motion/react` (animasi), `lucide-react` (ikon), Lenis (smooth scroll).
- Struktur: komponen di `src/components/`, CSS per komponen di `src/styles/` (sections/, layout/, components/), design tokens di `src/styles/index.css`.
- Konsep desain: "Peta Sinyal" — palet navy-teal (monokrom, tanpa amber), latar terang (ivory).
- Pola animasi yang dipakai: sticky-panel storytelling, text-reveal 3-lapis (`TextReveal.jsx`), horizontal track, parallax scroll-driven — semua via `motion/react` + Lenis, dengan dukungan `prefers-reduced-motion`.
- Data yang masih placeholder (nama pendiri, kontak, rekening donasi, statistik) ditandai dengan komentar `*Data ilustratif` / `placeholder` di kode.
