// src/app/api/products/route.js

let products = [
  { id: "1", name: "Wireless Headphones", description: "High-quality wireless headphones with noise cancellation.", price: 99.99 },
  { id: "2", name: "Smart Watch", description: "Stylish smart watch with health tracking features.", price: 149.99 },
  { id: "3", name: "Bluetooth Speaker", description: "Portable Bluetooth speaker with excellent sound quality.", price: 49.99 },
];

// GET all products
export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST a new product
export async function POST(req) {
  const body = await req.json(); // { name, description, price }
  const newProduct = { id: Date.now().toString(), ...body };
  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
