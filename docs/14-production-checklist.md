# Production Checklist

## Frontend
- [ ] Responsive on all major breakpoints.
- [ ] No layout shifts (CLS).
- [ ] Empty states and error boundaries implemented.
- [ ] Accessible navigation (keyboard friendly).

## Backend & Database
- [ ] Prisma schema reviewed and indexes optimized.
- [ ] No `any` types in TypeScript.
- [ ] Transactions used for financial/inventory operations.

## Security
- [ ] All environment variables are production values.
- [ ] Admin routes fully protected server-side.
- [ ] Rate limiting on auth and checkout endpoints.
- [ ] Webhook signatures validated.

## External Integrations
- [ ] Razorpay switched to Live Mode.
- [ ] Shiprocket switched to Production credentials.
- [ ] Cloudinary delivery optimized.

## SEO & Performance
- [ ] Sitemap generated.
- [ ] robots.txt configured.
- [ ] Core Web Vitals optimized (Lighthouse score > 90).
