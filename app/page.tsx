"use client";

import { useState } from "react";
import { Brain, Clock3, Grid3X3, Play, Trophy, Sparkles } from "lucide-react";

const levels = [
  ["Pemanasan", "Soal 1–5", "🌱"], ["Mudah", "Soal 6–10", "🌊"],
  ["Menengah", "Soal 11–15", "🧠"], ["Sulit", "Soal 16–20", "🔥"],
  ["Sangat Sulit", "Soal 21–25", "⚡"], ["Ahli", "Soal 26–30", "👑"],
];

export default function Home() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [notice, setNotice] = useState("");
  function startGame() {
    if (!name.trim() || !studentClass.trim()) { setNotice("Nama dan kelas harus diisi terlebih dahulu."); return; }
    setNotice("Data pemain siap. Integrasi sesi permainan dan timer server akan diaktifkan pada tahap backend.");
  }
  return <main className="min-h-screen overflow-hidden">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="#" className="flex items-center gap-3"><span className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-3 text-white shadow-lg"><Grid3X3 size={26}/></span><span><b className="block text-lg text-blue-950">Sudoku by Mujahidin</b><small className="font-bold tracking-widest text-slate-500">S. Pd. · GAME EDUKASI</small></span></a>
      <nav className="hidden gap-7 text-sm font-bold text-slate-600 md:flex"><a href="#aturan">Aturan</a><a href="#level">Level</a><a href="#mulai">Mulai</a></nav>
    </header>
    <section className="hero-bg px-6 py-16 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-bold text-violet-700"><Sparkles size={16}/> 30 TANTANGAN · 6 LEVEL</div><h1 className="text-5xl font-black leading-tight tracking-tight text-blue-950 md:text-7xl">Asah Logika,<br/><span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Taklukkan</span><br/>Tantangan!</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Selamat datang di arena Sudoku. Susun angka, latih konsentrasi, dan buktikan kemampuanmu dari level pemula hingga ahli.</p><div className="mt-8 flex flex-wrap gap-5 text-sm font-bold text-slate-600"><span className="flex items-center gap-2"><Clock3 className="text-orange-500"/> Maksimal 60 menit</span><span className="flex items-center gap-2"><Trophy className="text-amber-500"/> Papan peringkat</span></div></div>
      <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl backdrop-blur"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-black tracking-widest text-violet-600">SUDOKU CHALLENGE</p><h2 className="text-2xl font-black text-blue-950">Siap jadi juara?</h2></div><span className="text-4xl">🧩</span></div><div className="grid grid-cols-3 gap-3">{[["30","Soal"],["6","Level"],["60′","Menit"]].map(([v,l])=><div key={l} className="rounded-2xl bg-blue-50 p-4 text-center"><b className="block text-2xl text-blue-700">{v}</b><small className="font-bold text-slate-500">{l}</small></div>)}</div><div className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-5 text-white"><Brain size={28}/><p className="mt-3 text-xl font-black">Berpikir cermat. Bermain jujur.</p><p className="mt-1 text-sm text-white/80">Selesaikan tantangan secara berurutan.</p></div></div>
    </div></section>
    <section id="level" className="mx-auto max-w-7xl px-6 py-16"><div className="text-center"><p className="font-black tracking-widest text-violet-600">PETA PETUALANGAN</p><h2 className="mt-2 text-3xl font-black text-blue-950">Enam Level Tantangan</h2><p className="mt-3 text-slate-500">Setiap level berisi lima soal yang harus diselesaikan berurutan.</p></div><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{levels.map(([title,range,emoji],i)=><article key={title} className="rounded-3xl border border-white bg-white p-6 shadow-lg shadow-slate-200/70"><div className="flex items-center justify-between"><span className="text-4xl">{emoji}</span><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">LEVEL {i+1}</span></div><h3 className="mt-5 text-xl font-black text-blue-950">{title}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{range}</p></article>)}</div></section>
    <section id="aturan" className="bg-white px-6 py-14"><div className="mx-auto max-w-5xl"><h2 className="text-center text-3xl font-black text-blue-950">Aturan Singkat Sudoku</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[["Isi angka 1–9","Lengkapi seluruh kotak kosong pada papan 9×9."],["Hindari pengulangan","Setiap baris, kolom, dan kotak 3×3 berisi angka 1–9 tanpa pengulangan."],["Selesaikan berurutan","Tidak boleh melewati soal. Waktu permainan maksimal 60 menit."]].map(([h,d])=><div key={h} className="rounded-2xl bg-slate-50 p-6"><h3 className="font-black text-violet-700">{h}</h3><p className="mt-2 leading-7 text-slate-600">{d}</p></div>)}</div></div></section>
    <section id="mulai" className="px-6 py-16"><div className="mx-auto max-w-xl rounded-[2rem] bg-white p-8 shadow-2xl"><div className="mb-6 text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700"><Play/></span><h2 className="mt-4 text-2xl font-black text-blue-950">Siapkan Data Pemain</h2><p className="mt-1 text-sm text-slate-500">Tidak perlu membuat akun siswa.</p></div><label className="mb-2 block text-sm font-bold">Nama lengkap</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="Masukkan nama lengkap" className="mb-4 w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none focus:border-violet-500"/><label className="mb-2 block text-sm font-bold">Kelas</label><input value={studentClass} onChange={e=>setStudentClass(e.target.value)} placeholder="Contoh: VIII A" className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 outline-none focus:border-violet-500"/><button onClick={startGame} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 font-black text-white shadow-lg"><Play size={18}/> Mulai Permainan</button>{notice && <p role="status" className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">{notice}</p>}<p className="mt-4 text-center text-xs text-slate-400">Purwarupa awal — sesi, timer, dan penilaian akan dihubungkan ke backend.</p></div></section>
    <footer className="bg-blue-950 px-6 py-8 text-center text-sm text-blue-100">© {new Date().getFullYear()} Sudoku by Mujahidin, S. Pd. · Asah Logika, Taklukkan Tantangan!</footer>
  </main>;
}
