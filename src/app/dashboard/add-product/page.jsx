"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });

    if (!res.ok) throw new Error("Failed to add product");

    const data = await res.json(); // this includes newProduct with id
    setName("");
    setDescription("");
    setPrice("");

    // Redirect to the detail page of the newly added product
router.push({
  pathname: `/products/${data.id}`,
  query: { name: data.name, description: data.description, price: data.price }
});


  } catch (err) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};


  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-purple-600 text-center">Add New Product</h1>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <button 
          type="submit" 
          className={`w-full py-3 rounded-xl text-white font-semibold ${loading ? "bg-purple-300" : "bg-purple-500 hover:bg-purple-600"}`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
