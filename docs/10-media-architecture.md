# Media Architecture (Cloudinary)

## Implementation
- **Storage**: All product and category images hosted on Cloudinary. No binaries in Postgres.
- **Optimization**: Use `next-cloudinary` or built-in Next.js Image component with Cloudinary loader for automatic format (WebP/AVIF) and sizing.
- **Upload (Admin)**: 
  - Admin requests a signed upload URL/signature from the backend.
  - Direct upload from browser to Cloudinary to save server bandwidth.
  - Cloudinary returns secure URL and public ID.
  - Admin submits product form with Cloudinary IDs to the backend.
