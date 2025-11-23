"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.email.includes("@")) {
      alert("Email tidak valid!");
      return;
    }

    if (form.password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Password tidak sama!");
      return;
    }

    // Nanti tinggal ganti ke API backend kamu
    alert("Registrasi berhasil!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Buat Akun Baru
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Konfirmasi Password</label>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Ulangi password"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition text-white p-3 rounded-xl font-semibold"
          >
            Daftar Sekarang
          </button>
        </form>

        <div className="text-center mt-5">
          <p className="text-gray-300">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-500 underline transition"
            >
              Login di sini
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
