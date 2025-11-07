import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'Early Bird', price: 'Rp75.000', perks: ['Akses semua sesi', 'Merch stiker edisi', 'Antrian prioritas'] },
  { name: 'Regular', price: 'Rp120.000', perks: ['Akses semua sesi', 'Print zine kolaborasi', 'Kupon F&B mitra'] },
  { name: 'Crew Support', price: 'Rp200.000', perks: ['Semua benefit Regular', 'Meet & greet artis', 'Poster eksklusif ditandatangani'] },
];

export default function Tickets() {
  return (
    <section id="tiket" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center"
        >
          Tiket & Dukungan
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <div className="text-2xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-fuchsia-600">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 font-semibold text-white hover:bg-gray-900 transition"
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Harga dapat berubah. Kuota terbatas, pesan lebih awal untuk mendapatkan harga terbaik.
        </p>
      </div>
    </section>
  );
}
