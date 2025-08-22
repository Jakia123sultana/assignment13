// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your own user validation logic
        if (credentials.email === "test@example.com" && credentials.password === "123456") {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    // optional: signOut, error pages
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to /products after login
      return "/products";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
