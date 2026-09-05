# Shipping Architecture (Shiprocket)

## Flow
1. **Serviceability**: Check pincode serviceability during checkout (optional V1).
2. **Shipment Creation**: Once order is `PAID` and packed, Admin clicks "Create Shipment". Backend pushes order details to Shiprocket API.
3. **AWB Generation**: Shiprocket assigns a courier and returns AWB.
4. **Tracking**: Webhook or cron job updates local database with Shiprocket tracking status (e.g., `SHIPPED`, `OUT_FOR_DELIVERY`, `DELIVERED`).

## Abstraction
- The frontend interacts with an internal `Shipment` model, not directly with Shiprocket payloads, allowing easy migration to other providers later.
