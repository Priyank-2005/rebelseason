# Project Structure

```
src/
├── app/
│   ├── (store)/                 # Public-facing store routes
│   │   ├── page.tsx             # Homepage
│   │   ├── products/            # Product listings and details
│   │   ├── categories/          # Category pages
│   │   ├── cart/                # Cart page
│   │   ├── checkout/            # Checkout flow
│   │   └── account/             # Customer account area
│   ├── admin/                   # Admin dashboard routes
│   ├── api/                     # API routes (webhooks, external integrations)
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx            
│   ├── error.tsx                
│   └── globals.css              
├── components/
│   ├── ui/                      # Base design system components (buttons, inputs)
│   ├── layout/                  # Headers, footers, navigation
│   ├── home/                    # Homepage specific components
│   ├── product/                 # Product cards, galleries, variant selectors
│   ├── cart/                    # Cart drawer, items
│   ├── checkout/                # Checkout forms
│   ├── admin/                   # Admin UI components
│   └── shared/                  # Shared components
├── lib/                         # Core utilities and configs
│   ├── db/                      # Prisma client setup
│   ├── auth/                    # Authentication config
│   ├── razorpay/                # Payment service wrappers
│   ├── shiprocket/              # Shipping service wrappers
│   ├── cloudinary/              # Media service wrappers
│   ├── validations/             # Zod schemas
│   ├── utils/                   # Helper functions
│   └── constants/               # App-wide constants
├── server/
│   ├── actions/                 # Next.js Server Actions (Mutations)
│   ├── services/                # Business logic layer
│   └── repositories/            # Database access layer
├── types/                       # TypeScript type definitions
├── hooks/                       # Custom React hooks
└── data/                        # Mock data for Phase 1-6 frontend development
```
