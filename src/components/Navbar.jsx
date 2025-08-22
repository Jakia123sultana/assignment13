// "use client";

// import Link from "next/link";
// import { useState } from "react";
// // import { useSession, signOut } from "next-auth/react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
// //   const { data: session } = useSession();

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-purple-600">
//           MyShop
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link href="/" className="hover:text-purple-500">Home</Link>
//           <Link href="/products" className="hover:text-purple-500">Products</Link>
//           {/* {session ? ( */}
//             <>
//               <Link href="/dashboard/add-product" className="hover:text-purple-500">Add Product</Link>
//               <button
//                 // onClick={() => signOut()}
//                 className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
//               >
//                 Logout
//               </button>
//             </>
//           {/* ) : ( */}
//             <Link href="/login" className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
//               Login
//             </Link>
//           {/* )} */}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-800 dark:text-white focus:outline-none"
//           >
//             {isOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                 viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                 viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
//           <Link href="/" className="block hover:text-purple-500">Home</Link>
//           <Link href="/products" className="block hover:text-purple-500">Products</Link>
//           {session ? (
//             <>
//               <Link href="/dashboard/add-product" className="block hover:text-purple-500">Add Product</Link>
//               <button
//                 // onClick={() => signOut()}
//                 className="w-full bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link href="/login" className="block w-full bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
"use client"; // <-- MUST be at the top

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">MyShop</Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-purple-500">Home</Link>
          <Link href="/products" className="hover:text-purple-500">Products</Link>

          {session ? (
            <>
              <Link href="/dashboard/add-product" className="hover:text-purple-500">Add Product</Link>
              <button onClick={() => signOut()} className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Logout</button>
            </>
          ) : (
            <Link href="/login" className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Login</Link>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-purple-500">Home</Link>
          <Link href="/products" className="block hover:text-purple-500">Products</Link>

          {session ? (
            <>
              <Link href="/dashboard/add-product" className="block hover:text-purple-500">Add Product</Link>
              <button onClick={() => signOut()} className="w-full bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Logout</button>
            </>
          ) : (
            <Link href="/login" className="block w-full bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
