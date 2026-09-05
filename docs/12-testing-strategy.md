# Testing Strategy

## 1. Unit Testing
- **Tool**: Jest or Vitest
- **Focus**: Pricing calculators, discount logic, cart aggregations, Zod validation schemas.

## 2. Integration Testing
- **Focus**: API endpoints, Server Actions, database queries. Testing the flow from Service layer to Database.

## 3. End-to-End (E2E) Testing
- **Tool**: Playwright or Cypress
- **Critical Paths**: 
  - Browse -> Add to Cart -> Checkout -> Mock Payment -> Order Success.
  - Admin Login -> Create Product -> View on Frontend.

## 4. Manual Testing Checklist
- Cross-browser compatibility.
- Mobile responsiveness on actual devices.
- Webhook simulation using CLI tools (e.g., Stripe/Razorpay CLI).
