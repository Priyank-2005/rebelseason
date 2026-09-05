# API Reference

*Note: With Next.js App Router, many mutations will be handled via Server Actions rather than traditional REST APIs. This document covers traditional API routes, primarily for webhooks and external clients.*

## Webhooks

### `POST /api/webhooks/razorpay`
- **Purpose**: Receive payment status updates.
- **Validation**: `x-razorpay-signature` header.
- **Idempotent**: Yes.

### `POST /api/webhooks/shiprocket`
- **Purpose**: Receive tracking status updates.
- **Validation**: Auth token/signature check.
- **Idempotent**: Yes.

## Potential Client APIs (if not using Server Actions)

### `GET /api/products`
- **Query Params**: `category`, `search`, `page`, `limit`
- **Response**: List of published products.

### `POST /api/payments/create`
- **Auth**: Required (or valid guest session)
- **Body**: `orderId`
- **Response**: `razorpayOrderId`, `amount`, `currency`
