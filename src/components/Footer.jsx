import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold tracking-wide">MUSIKALITERASI</h3>
            <p className="text-white/70 text-sm">Festival yang menjembatani melodi dan aksara.</p>
          </div>
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Musikaliterasi Kolektif. Semua hak cipta.
          </div>
        </div>
      </div>
    </footer>
  );
}
