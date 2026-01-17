"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { saveToken } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login gagal");
        return;
      }

      saveToken(data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Server tidak dapat dihubungi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <p className="mt-3 text-sm">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
