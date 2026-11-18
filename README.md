# Sudoku by Mujahidin, S. Pd.

Next.js + Supabase Sudoku educational app.

Student features: 30 sequential 9x9 puzzles in six levels, guest session, server deadline of 60 minutes, answer validation, locked clues, result score, leaderboard.

Setup:
1. Install Node.js LTS and run npm install.
2. Copy .env.example to .env.local.
3. Paste Supabase publishable key from Project Settings > API Keys into NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.
4. Run npm run dev.

Admin account:
Create a user in Supabase Authentication > Users, then insert its UUID and email into public.admin_users. Admin panel is a remaining implementation item.

Never expose service role/secret key in browser, GitHub or NEXT_PUBLIC variables. Database direct access is revoked for anon/authenticated; Edge Function uses server-side key.
