"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Bengkel Mobil Auto 2000
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col">
            <label className="text-white mb-1">Username</label>
            <input
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={u}
              onChange={(e) => setU(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={p}
              onChange={(e) => setP(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white p-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        {/* Bagian daftar akun */}
        <div className="text-center mt-5">
          <p className="text-gray-300">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-500 underline transition"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
