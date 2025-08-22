// "use client";

// import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   const handleCredentialLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     await signIn("credentials", {
//       redirect: true,
//       email,
//       password,
//       callbackUrl: "/products",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form 
//         onSubmit={handleCredentialLogin} 
//         className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold mb-8 text-center text-purple-600">Login</h1>

//         {/* Email */}
//         <div className="mb-6">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Enter your email" 
//             required
//             className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Enter your password" 
//             required
//             className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Submit */}
//         <button 
//           type="submit" 
//           className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { auth, googleProvider } from "@/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Google login
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User info:", result.user);
      router.push("/products");
    } catch (error) {
      console.error(error.message);
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Email/Password login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User info:", result.user);
      router.push("/products");
    } catch (error) {
      console.error(error.message);
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center text-purple-600">Login</h1>

        {/* Email/Password form */}
        <form onSubmit={handleEmailLogin} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold ${
              loading ? "bg-purple-300" : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center text-gray-400 mb-4">OR</div>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white font-semibold ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Logging in..." : "Login with Google"}
        </button>
        
      </div>
    </div>
  );
}

