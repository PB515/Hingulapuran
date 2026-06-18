-- 0002_content — Hingulapuran content model + the awareness list.
-- Mirrors lib/books.ts, lib/blog.ts, lib/gallery.ts, lib/temples.ts so the data
-- layer can swap from static seed → Supabase with the page components unchanged.
-- Public reads published rows (RLS); writes go through the service-role client (admin).

-- migrate:up
create table if not exists books (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  title_en    text not null,
  language    text,
  year        text,
  blurb       text,
  cover       text,
  pdf         text,
  published   boolean not null default true,
  sort        int not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  excerpt       text,
  body          text not null,
  published     boolean not null default false,
  published_at  timestamptz,
  created_at    timestamptz not null default now()
);

create table if not exists gallery_items (
  id          uuid primary key default gen_random_uuid(),
  src         text not null,
  title       text not null,
  note        text,
  sort        int not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists temples (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  place       text not null,
  lat         double precision not null,
  lng         double precision not null,
  note        text,
  verify      boolean not null default false,
  created_at  timestamptz not null default now()
);

-- the awareness list (book downloads) + contact messages
create table if not exists subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text unique not null,
  source      text,
  created_at  timestamptz not null default now()
);

create table if not exists messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- RLS: anon may READ published content + temples/gallery; nobody writes via anon.
-- (The admin uses the service-role client, which bypasses RLS.)
alter table books enable row level security;
alter table posts enable row level security;
alter table gallery_items enable row level security;
alter table temples enable row level security;
alter table subscribers enable row level security;
alter table messages enable row level security;

create policy books_read   on books         for select using (published);
create policy posts_read   on posts         for select using (published);
create policy gallery_read on gallery_items for select using (true);
create policy temples_read on temples       for select using (true);
-- anon may INSERT into subscribers + messages (form submissions), read none.
create policy subs_insert  on subscribers   for insert with check (true);
create policy msgs_insert  on messages      for insert with check (true);

-- migrate:down
drop policy if exists msgs_insert  on messages;
drop policy if exists subs_insert  on subscribers;
drop policy if exists temples_read on temples;
drop policy if exists gallery_read on gallery_items;
drop policy if exists posts_read   on posts;
drop policy if exists books_read   on books;
drop table if exists messages;
drop table if exists subscribers;
drop table if exists temples;
drop table if exists gallery_items;
drop table if exists posts;
drop table if exists books;
