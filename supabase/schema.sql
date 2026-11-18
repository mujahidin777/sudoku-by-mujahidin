-- Skema awal Sudoku by Mujahidin, S. Pd.
create extension if not exists pgcrypto;

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(), site_title text not null default 'Sudoku by Mujahidin, S. Pd.',
  tagline text not null default 'Asah Logika, Taklukkan Tantangan!', hero_title text not null default 'Asah Logika, Taklukkan Tantangan!',
  hero_description text, logo_url text, banner_url text,
  theme jsonb not null default '{"primary":"#2563eb","accent":"#7c3aed","background":"#fffaf0"}'::jsonb,
  updated_at timestamptz not null default now()
);
create table if not exists public.site_pages (
  id uuid primary key default gen_random_uuid(), title text not null, slug text not null unique,
  content jsonb not null default '{}'::jsonb, is_published boolean not null default false,
  sort_order integer not null default 0, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.site_menu_items (
  id uuid primary key default gen_random_uuid(), label text not null, href text not null,
  icon text not null default 'menu', sort_order integer not null default 0, is_visible boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.site_media (
  id uuid primary key default gen_random_uuid(), file_name text not null, storage_path text not null,
  public_url text not null, alt_text text, media_type text not null default 'image', created_at timestamptz not null default now()
);
create table if not exists public.sudoku_questions (
  id uuid primary key default gen_random_uuid(), question_number integer not null unique check (question_number between 1 and 30),
  level_number integer not null check (level_number between 1 and 6), title text not null, puzzle jsonb not null,
  solution jsonb not null, is_published boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.game_sessions (
  id uuid primary key default gen_random_uuid(), student_name text not null, student_class text not null,
  started_at timestamptz not null default now(), ended_at timestamptz, deadline_at timestamptz not null default (now() + interval '60 minutes'),
  status text not null default 'in_progress' check (status in ('in_progress','completed','ended_early','timeout')),
  correct_count integer not null default 0, wrong_count integer not null default 0, unattempted_count integer not null default 30,
  hint_count integer not null default 0, score numeric(5,2) not null default 0, finish_reason text
);
create table if not exists public.game_answers (
  id uuid primary key default gen_random_uuid(), session_id uuid not null references public.game_sessions(id) on delete cascade,
  question_id uuid not null references public.sudoku_questions(id), submitted_grid jsonb,
  is_correct boolean not null default false, hint_count integer not null default 0, answered_at timestamptz,
  unique(session_id, question_id)
);
-- RLS aktif; policy aman dan validasi server harus ditambahkan sebelum produksi.
alter table public.site_settings enable row level security;
alter table public.site_pages enable row level security;
alter table public.site_menu_items enable row level security;
alter table public.site_media enable row level security;
alter table public.sudoku_questions enable row level security;
alter table public.game_sessions enable row level security;
alter table public.game_answers enable row level security;
-- Jangan mengekspos kolom solution kepada browser siswa. Validasi dilakukan di server.
