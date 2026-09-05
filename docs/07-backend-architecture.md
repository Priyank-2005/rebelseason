# Backend Architecture

## Layers
1. **API Routes / Server Actions**: The entry point for the frontend. Handles request parsing, triggers validation, and formats responses.
2. **Validation Layer**: Uses Zod schemas to strictly validate all incoming data.
3. **Service Layer**: Contains business logic (e.g., calculating cart totals, orchestrating payment creation).
4. **Repository Layer / Prisma**: Abstracts direct database calls.

## Principles
- **No Client-Side Trust**: All prices, discounts, and inventory availability are calculated and verified on the server.
- **Transactions**: Complex operations (like order creation + inventory deduction) must use Prisma transactions.
- **Error Handling**: Standardized API error responses.
- **Idempotency**: Webhooks (Razorpay, Shiprocket) must be idempotent to handle duplicate deliveries gracefully.
