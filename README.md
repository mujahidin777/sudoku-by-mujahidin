# Sudoku by Mujahidin, S. Pd.

Purwarupa awal website Sudoku edukatif menggunakan Next.js, TypeScript, Tailwind CSS, dan Supabase.

## Menjalankan secara lokal
1. Instal Node.js versi LTS.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env.local` dan isi URL Supabase serta anon/publishable key.
4. Jalankan `npm run dev` lalu buka http://localhost:3000.

## Supabase
Jalankan `supabase/schema.sql` melalui SQL Editor pada proyek Supabase. Skema ini masih fondasi awal; kebijakan RLS dan fungsi server harus ditinjau dan dilengkapi sebelum dipakai siswa.

## Status
Halaman depan, informasi enam level, aturan singkat, dan formulir identitas pemain sudah tersedia. Integrasi sesi game, timer server 60 menit, 30 puzzle dengan solusi unik, validasi jawaban di server, login admin, dashboard CMS, unggah media, dan leaderboard belum diimplementasikan. Jangan gunakan untuk penilaian resmi sebelum backend dan kebijakan keamanan selesai.

## Keamanan penting
Jangan pernah menaruh Supabase service-role key di browser atau variabel `NEXT_PUBLIC_*`. Jangan mengirim kunci rahasia melalui chat. Nama dan kelas bukan autentikasi; data hasil dan jawaban siswa harus dilindungi melalui RLS dan endpoint server.
