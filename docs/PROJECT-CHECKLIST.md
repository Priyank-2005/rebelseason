# Rebel Season Project Checklist

## Phase 0: Discovery & Architecture
- [x] Inspect repository
- [x] Analyze brand references
- [x] Create requirements document
- [x] Create architecture and planning docs

## Phase 1: Foundation
- [x] Initialize Next.js project
- [x] Configure Tailwind CSS
- [x] Configure TypeScript
- [x] Set up directory structure
- [x] Install base dependencies (lucide-react, etc.)

## Phase 2: Design System
- [x] Define color tokens in Tailwind config
- [x] Define typography (fonts)
- [x] Create base UI components (Button, Input, Card)

## Phase 3: Homepage (Mock Data)
- [x] Header & Navigation component
- [x] Hero section
- [x] Featured collections section
- [x] New arrivals section
- [x] Footer component

## Phase 4: Product Discovery (Mock Data)
- [x] Product Card component
- [x] Category page layout
- [x] Filtering and sorting UI
- [x] Product grid with responsive layout

## Phase 5: Product Detail (Mock Data)
- [x] Image gallery component
- [x] Variant selector (size, color)
- [x] Product info and descriptions
- [x] Add to cart functionality

## Phase 6: Cart & Checkout UI (Mock Data)
- [x] Cart drawer / overlay
- [x] Cart item management (increase, decrease, remove)
- [x] Checkout forms (contact, shipping, payment step)

## Phase 7: Database Design
- [ ] Initialize Prisma
- [ ] Write schema (User, Product, Order, etc.)
- [ ] Create initial migration
- [ ] Seed script with mock products

## Phase 8: Backend/API
- [ ] Set up Prisma client
- [ ] Implement server actions for fetching products
- [ ] Implement server actions for cart/checkout

## Phase 9: Authentication
- [ ] Set up Auth.js / NextAuth
- [ ] Customer login/registration UI
- [ ] Admin protected routes

## Phase 10: Razorpay Integration
- [ ] Server action for order creation
- [ ] Frontend checkout integration
- [ ] Webhook handler for payment verification

## Phase 11: Shiprocket Integration
- [ ] Shipment creation service
- [ ] Tracking webhook handler

## Phase 12: Cloudinary Integration
- [ ] Image upload utility for admin
- [ ] Next.js Image loader configuration

## Phase 13: Admin Dashboard
- [ ] Admin layout and navigation
- [ ] Overview metrics

## Phase 14: Order & Product Management (Admin)
- [ ] Product list view
- [ ] Product creation/edit form
- [ ] Order list view
- [ ] Order detail and status update

## Phase 15: Customer Account
- [ ] Profile management
- [ ] Order history

## Phase 16-21: Finalization & Deployment
- [ ] Replace all mock data with DB integrations
- [ ] E2E and Unit Testing
- [ ] Security Audit
- [ ] Performance Optimization
- [ ] Deploy to Vercel
