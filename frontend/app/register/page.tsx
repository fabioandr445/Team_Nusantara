"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registrasi gagal");
        return;
      }

      router.push("/login");
    } catch {
      setError("Server tidak dapat dihubungi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          placeholder="Nama"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>

        <p className="mt-3 text-sm">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
