# Implementation Plan

## Phase 0: Discovery & Architecture (Current)
- **Goal**: Understand brand, define requirements, and design architecture.
- **Deliverables**: All files in `/docs`.

## Phase 1: Project Foundation
- **Goal**: Initialize Next.js, Tailwind, TypeScript, and Git.
- **Tasks**: Setup repository, configure linting, create directory structure.

## Phase 2: Design System
- **Goal**: Implement tokens for colors, typography, spacing, and base UI components.
- **Tasks**: Setup Tailwind config, create generic UI components (buttons, inputs).

## Phase 3: Homepage
- **Goal**: Build the main landing page with mock data.
- **Tasks**: Hero section, featured collections, brand story, newsletter signup.

## Phase 4: Product Discovery
- **Goal**: Build product listing and category pages.
- **Tasks**: Product grids, filters, sorting, search UI.

## Phase 5: Product Detail
- **Goal**: Build the individual product page.
- **Tasks**: Gallery, variant selectors, add-to-cart, descriptions.

## Phase 6: Cart & Checkout UI
- **Goal**: Implement the cart drawer/page and checkout flow UI.
- **Tasks**: Cart management (state), checkout forms.

## Phase 7: Database Design
- **Goal**: Implement Prisma schema.
- **Tasks**: Create models, migrations, setup Neon DB.

## Phase 8: Backend/API
- **Goal**: Connect UI to database via Server Actions/APIs.
- **Tasks**: Replace mock data with DB queries.

## Phase 9: Authentication
- **Goal**: Secure access for customers and admins.
- **Tasks**: NextAuth/Auth.js setup, login, registration.

## Phase 10: Razorpay
- **Goal**: Payment integration.
- **Tasks**: Order creation, checkout integration, webhook processing.

## Phase 11: Shiprocket
- **Goal**: Shipping integration.
- **Tasks**: Courier selection, AWB generation, tracking.

## Phase 12: Cloudinary
- **Goal**: Media management.
- **Tasks**: Image upload API, admin integration.

## Phase 13: Admin Dashboard
- **Goal**: Core admin UI.
- **Tasks**: Layout, metrics overview.

## Phase 14: Order & Product Management
- **Goal**: Admin control over catalog and sales.
- **Tasks**: CRUD for products, order status updates.

## Phase 15: Customer Account
- **Goal**: Self-service for customers.
- **Tasks**: Profile, order history.

## Phase 16-21: Finalization
- SEO, Security Audits, Testing, Performance, Deployment, and Monitoring.
