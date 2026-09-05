# Database Schema (Prisma)

## Key Entities & Relationships

### 1. User
- `id` (String, CUID), `email`, `passwordHash`, `role` (Enum: CUSTOMER, ADMIN), `createdAt`, `updatedAt`
- Relations: `Address[]`, `Order[]`

### 2. Address
- `id`, `userId`, `street`, `city`, `state`, `pincode`, `country`, `isDefaultShipping`, `isDefaultBilling`

### 3. Product
- `id`, `name`, `slug` (Unique), `description`, `shortDescription`, `basePrice` (Decimal), `salePrice` (Decimal), `isPublished`, `isFeatured`, `createdAt`, `updatedAt`
- Relations: `ProductImage[]`, `ProductVariant[]`, `ProductCategory[]`

### 4. ProductVariant
- `id`, `productId`, `sku` (Unique), `size`, `color`, `inventoryCount` (Int), `priceAdjustment` (Decimal)

### 5. ProductImage
- `id`, `productId`, `url` (Cloudinary), `altText`, `isPrimary`, `order` (Int)

### 6. Category
- `id`, `name`, `slug` (Unique), `description`, `imageUrl`
- Relations: `ProductCategory[]`

### 7. Order
- `id`, `userId`, `totalAmount` (Decimal), `status` (Enum), `paymentStatus` (Enum), `shippingAddressId`, `createdAt`, `updatedAt`
- Relations: `OrderItem[]`, `Payment[]`, `Shipment[]`

### 8. OrderItem
- `id`, `orderId`, `variantId`, `quantity` (Int), `priceAtPurchase` (Decimal)

### 9. Payment (Razorpay)
- `id`, `orderId`, `razorpayOrderId`, `razorpayPaymentId`, `status`, `amount`, `currency`

### 10. Shipment (Shiprocket)
- `id`, `orderId`, `shiprocketOrderId`, `shiprocketShipmentId`, `awbCode`, `courierName`, `status`, `trackingUrl`
