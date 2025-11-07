import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { time: '13.00', title: 'Pembukaan & Ambient Set', desc: 'Suasana dibuka dengan komposisi ambient & pembacaan prolog.' },
  { time: '14.00', title: 'Bengkel Menulis Puitik', desc: 'Latihan imagery, metafora, dan penyusunan naskah performatif.' },
  { time: '16.00', title: 'Diskusi: Musik x Sastra', desc: 'Panel kolaborasi lintas medium bersama kurator & pelaku industri.' },
  { time: '18.30', title: 'Konser Kolaboratif', desc: 'Pertunjukan utama: scoring live untuk teks-teks pilihan.' },
  { time: '21.00', title: 'Afterglow Reading', desc: 'Pembacaan karya bebas dan jam session akustik.' },
];

export default function Schedule() {
  return (
    <section className="py-24 bg-gradient-to-b from-white/60 to-white" id="jadwal">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center"
        >
          Alur Acara
        </motion.h2>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, idx) => (
              <motion.div
                key={t.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="relative md:grid md:grid-cols-2 gap-8 items-start"
              >
                <div className="flex md:justify-end md:pr-8">
                  <div className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-black text-white text-sm font-semibold shadow">
                    {t.time}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{t.title}</h3>
                  <p className="mt-2 text-gray-600">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
