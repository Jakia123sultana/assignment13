"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/products",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form 
        onSubmit={handleCredentialLogin} 
        className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-8 text-center text-purple-600">Login</h1>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Submit */}
        <button 
          type="submit" 
          className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
