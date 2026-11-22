-- November 2026 fee update: her PayPal pricing, plus a description for each fee.
-- Run once in Supabase → SQL Editor → New query → paste this whole file → Run.

alter table public.products add column if not exists description text;

-- Remove the old WordPress-era fees that are no longer offered online.
delete from public.products where id not in ('case-consultation', 'retainer-personal-injury', 'retainer-employment-law', 'retainer-long-term-disability', 'career-premium', 'labor-market-report', 'medical-case-management', 'medical-records-review', 'ada-accommodations', 'testing-assessments', 'post-offer-screenings', 'website-test-payment');

insert into public.products (id, category, name, detail, description, price, sort, active) values
  ('case-consultation', 'court', 'Case Consultation', '1 hour', 'One hour of case consultation for any type of vocational case.', 350, 0, true),
  ('retainer-personal-injury', 'court', 'Personal Injury Retainer', null, 'Comprehensive vocational evaluation with in-depth interview, testing, transferable skills, wage loss, and a rehabilitation plan, with vocational opinions and recommendations.', 5000, 1, true),
  ('retainer-employment-law', 'court', 'Employment Law Retainer', null, 'Retention and services for employment law cases in litigation, with a comprehensive report to settle or proceed.', 4500, 2, true),
  ('retainer-long-term-disability', 'court', 'Long Term Disability Retainer', null, 'A comprehensive vocational assessment of the disabled or injured individual for obtaining LTD benefits.', 4500, 3, true),
  ('career-premium', 'career', 'Premium Career Counseling', 'Includes 2 hours of counseling', 'Interest, work value, and ability testing, a brief personality assessment, local career options with job growth and pay, training programs, and two hours of face-to-face or remote counseling.', 2000, 0, true),
  ('labor-market-report', 'other', 'Labor Market Report', null, null, null, 0, true),
  ('medical-case-management', 'other', 'Medical Case Management', null, null, null, 1, true),
  ('medical-records-review', 'other', 'Medical Records Review', null, null, null, 2, true),
  ('ada-accommodations', 'other', 'ADA Reasonable Accommodations', null, null, null, 3, true),
  ('testing-assessments', 'other', 'Testing Assessments for Individuals', null, null, null, 4, true),
  ('post-offer-screenings', 'other', 'Small Business Post-Offer Screenings', null, null, null, 5, true),
  ('website-test-payment', 'court', 'Website test payment', 'Refund after testing', 'A $1 item for testing PayPal checkout. Keep hidden except while testing.', 1, 99, false)
on conflict (id) do update set category = excluded.category, name = excluded.name, detail = excluded.detail,
  description = excluded.description, price = excluded.price, sort = excluded.sort, active = excluded.active;
