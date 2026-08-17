# Erlex Foundation — Landing Page

Landing page untuk Erlex Foundation, yayasan sosial di bawah PT Filosi Exider Inovasi. Dibangun dengan React + Vite.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`. Bisa langsung di-deploy ke Vercel, Netlify, Cloudflare Pages, atau di-serve lewat Nginx/Express sebagai static file.

```bash
npm run preview   # untuk mengetes hasil build secara lokal
```

## Struktur

```
src/
  components/     Navbar, BackgroundSignal, Hero, Founder, About, Programs, Impact, Gallery, Donation, Contact, Footer, TextReveal
  hooks/          useReveal.js — animasi scroll-reveal; useCountUp.js — count-up statistik
  styles/         index.css — design tokens (warna, tipografi) & base style
                  sections/ — CSS per section; layout/ — Navbar, Footer, BackgroundSignal; components/ — TextReveal
  assets/         founder.webp — foto pendiri; image.webp — gambar galeri/hero
  App.jsx         Merakit semua section
  main.jsx        Entry point
```

Tema visual mengadaptasi pola scroll storytelling ala Google Cloud x Team USA: judul display raksasa, text-reveal 3 lapis (clip-path), horizontal track untuk program, sticky-story untuk dampak, dan latar tetap pola "Peta Sinyal" — semuanya di atas latar terang (ivory) dengan scroll halus Lenis.

## Hal yang masih perlu diisi sebelum live

Semua ditandai jelas di kode dengan komentar/placeholder:

- **Kontak** (`src/components/Contact.jsx`) — alamat, email, dan nomor telepon masih placeholder.
- **Pendiri** (`src/components/Founder.jsx`) — foto pendiri sudah terpasang (`src/assets/founder.webp`); nama, jabatan, biografi, dan kutipan masih placeholder (`FOUNDER` di konstanta atas file).
- **Donasi** (`src/components/Donation.jsx`) — nomor rekening & QRIS masih contoh. Tombol "Lanjutkan Donasi" belum terhubung ke payment gateway — perlu integrasi backend (mis. Midtrans atau Xendit).
- **Galeri** (`src/components/Gallery.jsx`) — masih berupa tile placeholder bergradasi, tinggal ganti dengan foto dokumentasi asli.
- **Statistik** (Hero & Impact) — angka (jumlah komunitas, penerima manfaat, dll.) masih ilustratif, tandai `*Data ilustratif` di kode untuk lokasi yang perlu diperbarui.
- **Form kontak** (`Contact.jsx`) — `handleSubmit` masih placeholder (`// TODO`), perlu dihubungkan ke backend/email service.

## Font

Menggunakan Google Fonts (Sora, Plus Jakarta Sans, JetBrains Mono) yang di-load lewat `<link>` di `index.html` — butuh koneksi internet saat halaman diakses.
