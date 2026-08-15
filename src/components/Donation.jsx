import { useState } from 'react'
import { ShieldCheck, FileText, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import '../styles/sections/Donation.css'

const PRESETS = [50000, 150000, 500000, 1000000]

const TRUST = [
  { icon: FileText, label: 'Laporan keuangan berkala' },
  { icon: ShieldCheck, label: 'Disalurkan langsung ke program' },
  { icon: Building2, label: 'Didukung PT Filosi Exider Inovasi' },
]

function formatRupiah(value) {
  if (!value) return ''
  return new Intl.NumberFormat('id-ID').format(value)
}

export default function Donation() {
  const [amount, setAmount] = useState(150000)
  const [customAmount, setCustomAmount] = useState('')
  const [method, setMethod] = useState('transfer')
  const [showInstructions, setShowInstructions] = useState(false)
  const revealRef = useReveal()

  const activeAmount = customAmount ? Number(customAmount) : amount

  function handlePresetClick(value) {
    setAmount(value)
    setCustomAmount('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!activeAmount) return
    setShowInstructions(true)
  }

  return (
    <section id="donasi" className="section donation">
      <div className="container">
        <div ref={revealRef} className="reveal donation__grid">
          <div className="donation__copy">
            <h2>Setiap kontribusi akan sangat bernilai.</h2>
            <p>
              Donasi Anda disalurkan langsung ke program bantuan tas & laptop,
              literasi digital, dan beasiswa di wilayah 3T.
            </p>

            <ul className="donation__trust">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={18} strokeWidth={1.8} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <form className="donation__card" onSubmit={handleSubmit}>
            {!showInstructions ? (
              <>
                <label className="donation__label" htmlFor="custom-amount">
                  Pilih nominal
                </label>
                <div className="donation__presets">
                  {PRESETS.map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={`donation__preset ${
                        !customAmount && amount === value ? 'is-active' : ''
                      }`}
                      onClick={() => handlePresetClick(value)}
                    >
                      Rp{formatRupiah(value)}
                    </button>
                  ))}
                </div>

                <div className="donation__custom">
                  <span>Rp</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="10000"
                    step="1000"
                    placeholder="Nominal lain"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>

                <label className="donation__label">Metode pembayaran</label>
                <div className="donation__methods">
                  <button
                    type="button"
                    className={`donation__method ${method === 'transfer' ? 'is-active' : ''}`}
                    onClick={() => setMethod('transfer')}
                  >
                    Transfer Bank
                  </button>
                  <button
                    type="button"
                    className={`donation__method ${method === 'qris' ? 'is-active' : ''}`}
                    onClick={() => setMethod('qris')}
                  >
                    QRIS
                  </button>
                </div>

                <button type="submit" className="btn btn-primary donation__submit">
                  Lanjutkan Donasi{activeAmount ? ` — Rp${formatRupiah(activeAmount)}` : ''}
                </button>
              </>
            ) : (
              <div className="donation__instructions">
                <p className="donation__instructions-amount">
                  Rp{formatRupiah(activeAmount)}
                </p>
                {method === 'transfer' ? (
                  <div className="donation__bank">
                    <p className="donation__placeholder-note">Contoh tampilan — ganti dengan rekening resmi</p>
                    <p>Bank BCA</p>
                    <p className="donation__bank-number">1234567890</p>
                    <p>a.n. Yayasan Erlex Foundation</p>
                  </div>
                ) : (
                  <div className="donation__qris">
                    <div className="donation__qris-box">QRIS akan tampil di sini</div>
                    <p className="donation__placeholder-note">Menunggu integrasi payment gateway (mis. Midtrans/Xendit)</p>
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-outline donation__back"
                  onClick={() => setShowInstructions(false)}
                >
                  ← Ubah nominal
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
