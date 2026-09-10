import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // ─── Clean existing data ───
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.address.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.user.deleteMany();

  // ─── Create Admin User ───
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@rebelseason.com",
      password: adminPassword,
      role: Role.ADMIN,
    },
  });
  console.log("Created admin:", admin.email);

  // ─── Create Sample Customers ───
  const customerPassword = await bcrypt.hash("customer123", 12);
  const customer1 = await prisma.user.create({
    data: {
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9876543210",
      password: customerPassword,
      role: Role.CUSTOMER,
    },
  });
  const customer2 = await prisma.user.create({
    data: {
      name: "Ananya Gupta",
      email: "ananya@example.com",
      phone: "9876543211",
      password: customerPassword,
      role: Role.CUSTOMER,
    },
  });
  const customer3 = await prisma.user.create({
    data: {
      name: "Riya Patel",
      email: "riya@example.com",
      phone: "9876543212",
      password: customerPassword,
      role: Role.CUSTOMER,
    },
  });
  console.log("Created 3 customers");

  // ─── Create Addresses ───
  await prisma.address.create({
    data: {
      userId: customer1.id,
      name: "Priya Sharma",
      phone: "9876543210",
      street: "42 MG Road, Sector 17",
      city: "Gurgaon",
      state: "Haryana",
      pincode: "122001",
      isDefault: true,
    },
  });

  // ─── Create Categories ───
  const categories = await Promise.all([
    prisma.category.create({ data: { name: "Dresses", slug: "dresses", description: "Elegant dresses for every occasion", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800" } }),
    prisma.category.create({ data: { name: "Co-ords", slug: "co-ords", description: "Matching sets that make styling effortless", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" } }),
    prisma.category.create({ data: { name: "Bottoms", slug: "bottoms", description: "Skirts, trousers, and more", image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800" } }),
    prisma.category.create({ data: { name: "Bags", slug: "bags", description: "Stylish bags for every outfit", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800" } }),
    prisma.category.create({ data: { name: "Jeans", slug: "jeans", description: "Premium denim collection", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800" } }),
    prisma.category.create({ data: { name: "Winterwear", slug: "winterwear", description: "Stay warm in style", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800" } }),
  ]);
  console.log("Created 6 categories");

  const [dresses, coords, bottoms, bags, jeans, winterwear] = categories;

  // ─── Create Products ───
  const productData = [
    { name: "Floral Maxi Dress", slug: "floral-maxi-dress", categoryId: dresses.id, price: 4999, originalPrice: 5999, discount: 17, images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800"], isNew: true, isFeatured: true, hasVariants: true, description: "A beautiful floral maxi dress perfect for summer occasions.", shortDescription: "Floral print maxi dress", material: "100% Cotton" },
    { name: "Evening Silk Gown", slug: "evening-silk-gown", categoryId: dresses.id, price: 7499, originalPrice: 8999, discount: 17, images: ["https://images.unsplash.com/photo-1566160980074-ce96bd9584c6?auto=format&fit=crop&q=80&w=800"], isNew: false, isBestSeller: true, hasVariants: true, description: "Luxurious silk gown for special evenings.", shortDescription: "Silk evening gown", material: "Pure Silk" },
    { name: "Ribbed Co-ord Set", slug: "ribbed-co-ord-set", categoryId: coords.id, price: 2499, images: ["https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=800"], isNew: true, hasVariants: true, description: "Comfortable ribbed co-ord set for casual outings.", shortDescription: "Ribbed matching set", material: "Ribbed Cotton Blend" },
    { name: "Printed Co-ord Set", slug: "printed-co-ord-set", categoryId: coords.id, price: 2999, images: ["https://images.unsplash.com/photo-1596783049098-b80c5417b1bf?auto=format&fit=crop&q=80&w=800"], isNew: false, isFeatured: true, hasVariants: true, description: "Trendy printed co-ord set.", shortDescription: "Printed matching set", material: "Polyester Blend" },
    { name: "Satin Slip Skirt", slug: "satin-slip-skirt", categoryId: bottoms.id, price: 1999, originalPrice: 2499, discount: 20, images: ["https://images.unsplash.com/photo-1583391733958-d2597285ea93?auto=format&fit=crop&q=80&w=800"], isNew: false, hasVariants: true, description: "Elegant satin slip skirt.", shortDescription: "Satin skirt", material: "Satin" },
    { name: "Wide Leg Trousers", slug: "wide-leg-trousers", categoryId: bottoms.id, price: 3299, images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"], isNew: true, isBestSeller: true, hasVariants: true, description: "Tailored wide leg trousers for a sophisticated look.", shortDescription: "Wide leg trousers", material: "Linen Blend" },
    { name: "Leather Tote Bag", slug: "leather-tote-bag", categoryId: bags.id, price: 3999, images: ["https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800"], isNew: true, hasVariants: false, stock: 25, description: "Premium leather tote bag.", shortDescription: "Leather tote", material: "Genuine Leather" },
    { name: "Canvas Crossbody Bag", slug: "canvas-crossbody-bag", categoryId: bags.id, price: 1499, images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800"], isNew: false, isFeatured: true, hasVariants: false, stock: 40, description: "Casual canvas crossbody bag.", shortDescription: "Canvas crossbody", material: "Canvas" },
    { name: "High Rise Skinny Jeans", slug: "high-rise-skinny-jeans", categoryId: jeans.id, price: 2799, images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800"], isNew: false, isBestSeller: true, hasVariants: true, description: "Classic high rise skinny jeans.", shortDescription: "Skinny jeans", material: "Denim (98% Cotton, 2% Elastane)" },
    { name: "Relaxed Fit Mom Jeans", slug: "relaxed-fit-mom-jeans", categoryId: jeans.id, price: 2499, images: ["https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=800"], isNew: true, hasVariants: true, description: "Comfortable relaxed fit mom jeans.", shortDescription: "Mom jeans", material: "100% Denim Cotton" },
    { name: "Chunky Knit Cardigan", slug: "chunky-knit-cardigan", categoryId: winterwear.id, price: 3499, images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"], isNew: false, isFeatured: true, hasVariants: true, description: "Cozy chunky knit cardigan.", shortDescription: "Knit cardigan", material: "Acrylic Wool Blend" },
    { name: "Cropped Puffer Jacket", slug: "cropped-puffer-jacket", categoryId: winterwear.id, price: 4999, originalPrice: 5999, discount: 17, images: ["https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"], isNew: true, isBestSeller: true, hasVariants: true, description: "Trendy cropped puffer jacket.", shortDescription: "Puffer jacket", material: "Nylon with Polyester Fill" },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const createdProducts = [];

  for (const pData of productData) {
    const product = await prisma.product.create({
      data: {
        name: pData.name,
        slug: pData.slug,
        categoryId: pData.categoryId,
        price: pData.price,
        originalPrice: pData.originalPrice || null,
        discount: pData.discount || null,
        images: pData.images,
        isNew: pData.isNew || false,
        isBestSeller: pData.isBestSeller || false,
        isFeatured: pData.isFeatured || false,
        hasVariants: pData.hasVariants,
        stock: pData.stock || 0,
        description: pData.description || null,
        shortDescription: pData.shortDescription || null,
        material: pData.material || null,
      },
    });

    if (pData.hasVariants) {
      const variantStocks = [10, 15, 20, 12, 8];
      for (let i = 0; i < sizes.length; i++) {
        await prisma.productVariant.create({
          data: {
            productId: product.id,
            size: sizes[i],
            stock: variantStocks[i],
          },
        });
      }
      await prisma.product.update({
        where: { id: product.id },
        data: { stock: variantStocks.reduce((a, b) => a + b, 0) },
      });
    }

    createdProducts.push(product);
  }
  console.log(`Created ${createdProducts.length} products with variants`);

  // ─── Create Sample Orders ───
  const order1 = await prisma.order.create({
    data: {
      orderNumber: "RS-10001",
      customerId: customer1.id,
      subtotal: 4999,
      total: 4999,
      status: "DELIVERED",
      customerName: customer1.name,
      customerEmail: customer1.email,
      customerPhone: customer1.phone,
      shippingAddress: { name: "Priya Sharma", street: "42 MG Road, Sector 17", city: "Gurgaon", state: "Haryana", pincode: "122001" },
      items: {
        create: {
          productId: createdProducts[0].id,
          name: createdProducts[0].name,
          quantity: 1,
          price: 4999,
          image: createdProducts[0].images[0],
          variantName: "M",
        },
      },
      payment: {
        create: {
          amount: 4999,
          method: "ONLINE",
          status: "CAPTURED",
          capturedAt: new Date(),
        },
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      orderNumber: "RS-10002",
      customerId: customer2.id,
      subtotal: 7499,
      total: 7499,
      status: "SHIPPED",
      customerName: customer2.name,
      customerEmail: customer2.email,
      shippingAddress: { name: "Ananya Gupta", street: "15 Park Street", city: "Mumbai", state: "Maharashtra", pincode: "400001" },
      items: {
        create: {
          productId: createdProducts[1].id,
          name: createdProducts[1].name,
          quantity: 1,
          price: 7499,
          image: createdProducts[1].images[0],
          variantName: "L",
        },
      },
      payment: {
        create: {
          amount: 7499,
          method: "COD",
          status: "UNPAID",
        },
      },
    },
  });

  const order3 = await prisma.order.create({
    data: {
      orderNumber: "RS-10003",
      customerId: customer3.id,
      subtotal: 5498,
      total: 5498,
      status: "PENDING",
      customerName: customer3.name,
      customerEmail: customer3.email,
      shippingAddress: { name: "Riya Patel", street: "8 Ashram Road", city: "Ahmedabad", state: "Gujarat", pincode: "380009" },
      items: {
        create: [
          { productId: createdProducts[2].id, name: createdProducts[2].name, quantity: 1, price: 2499, image: createdProducts[2].images[0], variantName: "S" },
          { productId: createdProducts[4].id, name: createdProducts[4].name, quantity: 1, price: 1999, image: createdProducts[4].images[0], variantName: "M" },
        ],
      },
      payment: {
        create: {
          amount: 5498,
          method: "ONLINE",
          status: "CAPTURED",
          capturedAt: new Date(),
        },
      },
    },
  });

  await prisma.order.create({
    data: {
      orderNumber: "RS-10004",
      customerId: customer1.id,
      subtotal: 3999,
      total: 3999,
      status: "CONFIRMED",
      customerName: customer1.name,
      customerEmail: customer1.email,
      customerPhone: customer1.phone,
      shippingAddress: { name: "Priya Sharma", street: "42 MG Road, Sector 17", city: "Gurgaon", state: "Haryana", pincode: "122001" },
      items: {
        create: { productId: createdProducts[6].id, name: createdProducts[6].name, quantity: 1, price: 3999, image: createdProducts[6].images[0] },
      },
      payment: {
        create: { amount: 3999, method: "ONLINE", status: "CAPTURED", capturedAt: new Date() },
      },
    },
  });

  await prisma.order.create({
    data: {
      orderNumber: "RS-10005",
      customerId: customer2.id,
      subtotal: 2799,
      total: 2799,
      status: "PROCESSING",
      customerName: customer2.name,
      customerEmail: customer2.email,
      shippingAddress: { name: "Ananya Gupta", street: "15 Park Street", city: "Mumbai", state: "Maharashtra", pincode: "400001" },
      items: {
        create: { productId: createdProducts[8].id, name: createdProducts[8].name, quantity: 1, price: 2799, image: createdProducts[8].images[0], variantName: "XL" },
      },
      payment: {
        create: { amount: 2799, method: "COD", status: "UNPAID" },
      },
    },
  });
  console.log("Created 5 sample orders");

  // ─── Create Sample Reviews ───
  await prisma.review.createMany({
    data: [
      { userId: customer1.id, productId: createdProducts[0].id, rating: 5, title: "Absolutely stunning!", comment: "The fabric is so soft and the fit is perfect. I got so many compliments!" },
      { userId: customer2.id, productId: createdProducts[1].id, rating: 4, title: "Beautiful gown", comment: "Really elegant. Just needed minor alterations but overall great quality." },
      { userId: customer3.id, productId: createdProducts[8].id, rating: 5, title: "Perfect fit!", comment: "These jeans fit like a dream. Will definitely order more." },
    ],
  });
  console.log("Created 3 sample reviews");

  console.log("Database seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
