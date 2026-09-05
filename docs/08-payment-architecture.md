# Payment Architecture (Razorpay)

## Flow
1. **Initiation**: Customer clicks "Pay Now" in checkout.
2. **Order Creation (Server)**: Backend calculates total from DB, calls Razorpay API to create an order, returns `razorpay_order_id`.
3. **Checkout (Client)**: Frontend opens Razorpay popup using the order ID.
4. **Payment**: Customer completes payment.
5. **Verification (Server)**: Frontend sends `razorpay_payment_id` and `razorpay_signature` to backend. Backend validates signature using `RAZORPAY_KEY_SECRET`.
6. **Fulfillment**: If valid, backend updates order status to `PAID` and triggers fulfillment workflows.

## Webhooks
- Endpoint `/api/webhooks/razorpay` listens for `payment.captured`, `payment.failed`.
- Used as a fallback if the client loses connection before step 5.
- Must verify webhook signature using `RAZORPAY_WEBHOOK_SECRET`.
