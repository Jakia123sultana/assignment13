"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  const params = useParams(); // get URL param
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/api/products");
      const data = await res.json();
      const found = data.find((p) => p.id === params.id);
      setProduct(found);
    }
    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold text-xl mb-4">${product.price}</p>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        onClick={() => alert("Add to Cart functionality can go here")}
      >
        Add to Cart
      </button>
    </div>
  );
}
