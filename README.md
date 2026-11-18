# Sudoku by Mujahidin, S. Pd.

Aplikasi latihan Sudoku edukatif menggunakan Next.js 15, TypeScript, Tailwind CSS v4, Supabase Postgres, Auth, Storage, dan Edge Functions.

## Yang sudah tersedia
- Halaman siswa dengan tampilan responsif dan enam level.
- 30 puzzle Sudoku 9×9 yang telah dibuat dan dipublikasikan.
- Setiap puzzle telah diperiksa memiliki satu solusi unik; solusi disimpan di server.
- Sesi tanpa login siswa, token acak, timer server 60 menit, dan urutan soal.
- Angka petunjuk dikunci; validasi jawaban dijalankan di Edge Function.
- Penilaian 100 × jumlah benar / 30, tanpa pengurangan karena percobaan salah.
- Hasil akhir dan papan peringkat.
- Halaman admin di /admin dengan login Supabase Auth, daftar hasil, edit soal, dan pengaturan identitas dasar.
- Bucket Storage site-media dan aturan upload hanya untuk akun admin yang terdaftar.

## Konfigurasi lokal
1. Pasang Node.js LTS.
2. Jalankan npm install.
3. Salin .env.example menjadi .env.local.
4. Isi NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY dengan publishable key proyek Supabase (Project Settings > API Keys). Jangan masukkan secret/service-role key.
5. Jalankan npm run dev dan buka http://localhost:3000.

## Menyiapkan admin
1. Buat akun melalui Supabase Dashboard > Authentication > Users (Add user).
2. Salin UUID dan email akun tersebut.
3. Jalankan SQL berikut melalui SQL Editor, ganti UUID dan email:
   insert into public.admin_users(id,email) values ('UUID_AUTH_USER','admin@example.com');
4. Buka /admin dan masuk menggunakan akun itu.

Admin hanya mendapat akses jika UUID akun Auth terdaftar di public.admin_users.

## Deploy ke Vercel
1. Hubungkan repository GitHub ini ke Vercel.
2. Tambahkan environment variable NEXT_PUBLIC_SUPABASE_URL dengan URL proyek.
3. Tambahkan NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY dengan publishable key.
4. Tambahkan NEXT_PUBLIC_SUDOKU_API_URL dengan URL fungsi:
   https://bpgxwnrlmusgitqyohpd.supabase.co/functions/v1/sudoku-api
5. Deploy.

## Keamanan dan batasan
- Tabel game dan kunci jawaban tidak dapat dibaca langsung oleh anon/authenticated; hanya server Edge Function menggunakan key internal.
- Jangan pernah memasukkan SUPABASE_SERVICE_ROLE_KEY atau secret key ke browser, GitHub, atau variabel NEXT_PUBLIC_*.
- Siswa tidak login; nama dan kelas bukan identitas terverifikasi. Cegah penyalahgunaan dengan pengawasan guru. Tambahkan CAPTCHA/rate limiting sebelum penggunaan publik skala besar.
- Panel admin saat ini meliputi hasil siswa, edit puzzle, dan pengaturan identitas dasar. Manajemen menu/halaman CMS lengkap, ekspor, serta kustomisasi gambar/banner belum selesai.
- Belum dilakukan pengujian browser end-to-end atau deployment publik. Lakukan uji coba internal sebelum dipakai untuk penilaian resmi.
