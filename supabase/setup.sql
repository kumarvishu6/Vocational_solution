-- Vocational Concepts: database schema.
-- Run once in Supabase → SQL Editor → New query → paste this whole file → Run. Safe to re-run.

-- ---------------------------------------------------------------------------
-- Admins: only people listed here can change content or read the inbox.
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  email text primary key,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins a
    where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- ---------------------------------------------------------------------------
-- Content tables
-- ---------------------------------------------------------------------------
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  credentials text not null default '',
  role text not null default '',
  summary text not null default '',
  bio text[] not null default '{}',
  photo_url text,
  sort integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id text primary key,
  category text not null check (category in ('court', 'career', 'other')),
  name text not null,
  detail text,
  price numeric(10, 2),
  sort integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null default 'Articles',
  excerpt text not null default '',
  body text not null default '',
  cover_url text,
  published boolean not null default false,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.podcast_episodes (
  id uuid primary key default gen_random_uuid(),
  number integer not null,
  title text not null,
  description text not null default '',
  duration text,
  listen_url text,
  published boolean not null default false,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Contact messages, booking requests, and orders from the website.
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('contact', 'booking', 'order')),
  reference text,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text,
  details jsonb not null default '{}'::jsonb,
  status text not null default 'new' check (status in ('new', 'in_progress', 'done')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------
alter table public.admins enable row level security;
alter table public.team_members enable row level security;
alter table public.products enable row level security;
alter table public.posts enable row level security;
alter table public.podcast_episodes enable row level security;
alter table public.inquiries enable row level security;

drop policy if exists "admins read admins" on public.admins;
create policy "admins read admins" on public.admins for select to authenticated using (public.is_admin());

-- Public reads what the website shows; admins manage everything.
drop policy if exists "public read team" on public.team_members;
create policy "public read team" on public.team_members for select using (true);
drop policy if exists "admins manage team" on public.team_members;
create policy "admins manage team" on public.team_members for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "public read products" on public.products;
create policy "public read products" on public.products for select using (active or public.is_admin());
drop policy if exists "admins manage products" on public.products;
create policy "admins manage products" on public.products for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "public read posts" on public.posts;
create policy "public read posts" on public.posts for select using (published or public.is_admin());
drop policy if exists "admins manage posts" on public.posts;
create policy "admins manage posts" on public.posts for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "public read episodes" on public.podcast_episodes;
create policy "public read episodes" on public.podcast_episodes for select using (published or public.is_admin());
drop policy if exists "admins manage episodes" on public.podcast_episodes;
create policy "admins manage episodes" on public.podcast_episodes for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Visitors may submit inquiries but never read them; only admins read and update.
drop policy if exists "anyone submits inquiries" on public.inquiries;
create policy "anyone submits inquiries" on public.inquiries for insert with check (status = 'new');
drop policy if exists "admins read inquiries" on public.inquiries;
create policy "admins read inquiries" on public.inquiries for select to authenticated using (public.is_admin());
drop policy if exists "admins update inquiries" on public.inquiries;
create policy "admins update inquiries" on public.inquiries for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admins delete inquiries" on public.inquiries;
create policy "admins delete inquiries" on public.inquiries for delete to authenticated using (public.is_admin());

-- ---------------------------------------------------------------------------
-- Image storage: public to view, admins to upload and delete.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "public read media" on storage.objects;
create policy "public read media" on storage.objects for select using (bucket_id = 'media');
drop policy if exists "admins upload media" on storage.objects;
create policy "admins upload media" on storage.objects for insert to authenticated with check (bucket_id = 'media' and public.is_admin());
drop policy if exists "admins update media" on storage.objects;
create policy "admins update media" on storage.objects for update to authenticated using (bucket_id = 'media' and public.is_admin());
drop policy if exists "admins delete media" on storage.objects;
create policy "admins delete media" on storage.objects for delete to authenticated using (bucket_id = 'media' and public.is_admin());


-- Vocational Concepts: starting content from her current website.
-- Run once after schema.sql. Re-running updates these rows to these values.

insert into public.team_members (slug, name, credentials, role, summary, bio, photo_url, sort) values
  ('cindy-fisher', 'Cindy L. Fisher', 'MA, CRC, PVE, IPEC, ABVE/D', 'Director & Owner', 'Ms. Fisher holds the highest certification of the American Board of Vocational Experts and has qualified as an expert in most Florida counties and in federal court.', array['Ms. Cindy Fisher is the Director and Owner of Vocational Concepts. She has passionately provided vocational rehabilitation services for two decades, helping countless individuals develop rewarding careers.', 'Ms. Fisher is a vocational expert holding the highest certification with the American Board of Vocational Experts as a Diplomate. She has qualified as an expert in most Florida counties and in federal court. She provides services and testimony in Marital Dissolution, Personal Injury, Product Liability, and Social Security cases, and has specialized training in testimony and litigation support.', 'Ms. Fisher is a Certified Rehabilitation Counselor, Professional Vocational Evaluator, and Psychometrician. She is an active member of the International Association of Rehabilitation Professionals, with membership in Forensics and Social Security, and provides testimony on a monthly basis for the Social Security Administration and forensic cases.', 'She has also received training in collaborative divorce and functional capacity evaluations. She is a graduate of the University of South Florida''s Master of Arts program in Rehabilitation Counseling and Mental Health Counseling, and holds a bachelor''s degree in Business Management.']::text[], '/brand/cindy-fisher.jpg', 0),
  ('sarah-bauer', 'Sarah Bauer', 'MA, CRC', 'Rehabilitation Specialist', 'Certified Rehabilitation Counselor experienced in medical record review, vocational profiles, and labor market research.', array['Sarah Bauer is a Certified Rehabilitation Counselor and member of the International Association of Rehabilitation Professionals. She completed her graduate training at the University of South Florida, including a Master of Arts in Rehabilitation and Mental Health Counseling and a Graduate Certificate in Clinical Aging Sciences.', 'She is experienced in medical record review, compilation of vocational profiles, labor market research and sampling, and the application of peer-reviewed research to vocational questions within the litigation context.']::text[], '/images/team/sarah.jpg', 1),
  ('carson-holton', 'Carson Holton', 'MA, CRC', 'Rehabilitation Specialist', 'Certified Rehabilitation Counselor with five years at the Florida Division of Vocational Rehabilitation.', array['Carson Holton is a Certified Rehabilitation Counselor, registered Mental Health Counseling Intern, and member of the International Association of Rehabilitation Professionals, with certifications in Best Practices for Supported Employment and Social Security Administration Work Incentives.', 'He worked for the Division of Vocational Rehabilitation for 5 years as a technician and counselor and has served as a supported employment specialist in the Tampa community.']::text[], '/images/team/carson.jpg', 2),
  ('craig-pagano', 'Craig Pagano', 'MA, CRC', 'Vocational Evaluator', 'Certified Rehabilitation Counselor serving veterans at Tampa''s James A. Haley VA Medical Center.', array['Craig Pagano is a Certified Rehabilitation Counselor and member of the National Rehabilitation Association, with a Master of Arts in Rehabilitation and Mental Health Counseling from the University of South Florida.', 'He serves as the onsite vocational rehabilitation specialist for the inpatient Polytrauma Transitional Rehabilitation Program at Tampa''s James A. Haley VA Medical Center. His specializations include brain injury, mental health, and career transition after injury.']::text[], '/images/team/craig.jpg', 3),
  ('dawn-bradley', 'Dawn Bradley', 'LCSW', 'Vocational Evaluator', 'Licensed Clinical Social Worker in rehabilitation since 2008, now with the VA''s Spinal Cord Injury Program in Tampa.', array['Dawn Bradley is a Certified Vocational Rehabilitation Specialist and Licensed Clinical Social Worker who has worked in the rehabilitation field since 2008, earning the Outstanding Employee of the Year award from the Florida Association of Rehabilitation Facilities in 2014.', 'She serves as the onsite vocational rehabilitation specialist for the Spinal Cord Injury Program at Tampa''s James A. Haley VA Medical Center.']::text[], '/images/team/dawn.jpg', 4),
  ('chris-hallissey', 'Chris Hallissey', 'MA, CRC, NCC, LMHC, IPEC', 'Vocational Rehabilitation Counselor', 'Rehabilitation counselor skilled in earning capacity, transferable skills, and labor market research.', array['Chris Hallissey is an experienced Vocational Rehabilitation Counselor skilled in psychometric assessment, employability and earning capacity assessment, vocational evaluation, transferable skills analysis, labor market research, and mental health counseling.', 'He holds a Master of Arts in Rehabilitation and Mental Health Counseling from the University of South Florida and is trained in the collaborative divorce process.']::text[], null, 5)
on conflict (slug) do update set name = excluded.name, credentials = excluded.credentials, role = excluded.role, summary = excluded.summary, bio = excluded.bio, photo_url = excluded.photo_url, sort = excluded.sort;

insert into public.products (id, category, name, detail, price, sort) values
  ('consultation-retainer', 'court', 'Consultation & Retainer Agreement', '30 minutes', 250, 0),
  ('retainer-divorce', 'court', 'Retainer Agreement for Vocational Evaluation', 'Divorce', 3500, 1),
  ('retainer-personal-injury', 'court', 'Retainer Agreement for Vocational Evaluation', 'Personal injury', 3500, 2),
  ('labor-market-research', 'court', 'Labor Market Research', 'Per hour', 150, 3),
  ('deposition-fee', 'court', 'Deposition Fee', 'Two hours', 600, 4),
  ('trial-fee', 'court', 'Trial Fee', 'Two hours', 750, 5),
  ('career-basic', 'career', 'Basic Career Counseling', 'Includes a one-hour Zoom review', 600, 0),
  ('career-premium', 'career', 'Premium Career Counseling', 'Includes 2.5 hours of face time', 1100, 1),
  ('career-platinum', 'career', 'Platinum Career Counseling', 'Our most comprehensive package', 2000, 2),
  ('additional-face-time', 'career', 'Additional Face Time', 'Per hour', 150, 3),
  ('additional-virtual-services', 'career', 'Additional Virtual Services', 'Per hour', 150, 4),
  ('medical-records-review', 'other', 'Medical Review of Records', 'Per hour', 300, 0),
  ('work-legal-research', 'other', 'Work / Legal Research', 'Per hour', 125, 1),
  ('small-business-testing', 'other', 'Small Business Employee Testing', null, 1000, 2),
  ('psychological-assessment-pai', 'other', 'Psychological Assessment (PAI)', null, 400, 3),
  ('tabe-test', 'other', 'TABE Test 11/12 D', null, 400, 4),
  ('social-security-services', 'other', 'Social Security Services', null, null, 5),
  ('denials', 'other', 'Denials', null, null, 6),
  ('vocational-strategy-benefits', 'other', 'Vocational Strategy for Benefits', null, null, 7)
on conflict (id) do update set category = excluded.category, name = excluded.name, detail = excluded.detail, price = excluded.price, sort = excluded.sort;
