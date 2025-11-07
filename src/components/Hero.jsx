import React from 'react';
import { motion } from 'framer-motion';
import { Music, Book, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const FloatingBadge = ({ icon: Icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white flex items-center gap-2 shadow-lg"
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium tracking-wide">{label}</span>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/93mV0wTqvJvwQ3my/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3"
          >
            <FloatingBadge icon={Music} label="Musik Live" />
            <FloatingBadge icon={Book} label="Literasi Kreatif" />
            <FloatingBadge icon={Star} label="Kolektif Komunitas" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-10 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
          >
            MUSIKALITERASI
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-teal-200 to-amber-200">Festival Musik & Literasi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/80"
          >
            Perayaan irama dan kata. Satukan dentuman ritme dengan narasi puitik dalam satu pengalaman multisensori yang tak terlupakan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#tiket"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-100 transition"
            >
              Dapatkan Tiket
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition"
            >
              Jelajahi Program
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
