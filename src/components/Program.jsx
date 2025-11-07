import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, BookOpenCheck, Sparkles, Users } from 'lucide-react';

const items = [
  {
    icon: Mic2,
    title: 'Panggung Musik',
    desc: 'Pertunjukan lintas-genre dari musisi independen dan kolaborasi eksperimental.',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: BookOpenCheck,
    title: 'Bengkel Literasi',
    desc: 'Kelas menulis, membaca performatif, dan merangkai zine kolektif.',
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    icon: Sparkles,
    title: 'Instalasi Imersif',
    desc: 'Ruang interaktif yang menggabungkan proyeksi visual, suara, dan teks.',
    color: 'from-amber-500/20 to-purple-500/20',
  },
  {
    icon: Users,
    title: 'Pasar Komunitas',
    desc: 'Booth penerbit indie, rilisan fisik, dan produk kreatif dari kolektif lokal.',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

export default function Program() {
  return (
    <section id="program" className="relative py-24 bg-gradient-to-b from-white to-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center"
        >
          Program Inti
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white shadow">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
