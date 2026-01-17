"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    plate: "",
    service: "",
    date: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi dasar
    if (!form.name || !form.phone || !form.vehicle || !form.plate || !form.service || !form.date) {
      alert("Semua field wajib diisi!");
      return;
    }

    alert("Booking berhasil!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Booking Layanan Servis
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          
          {/* Nama */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Nama Lengkap</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Nomor HP */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Nomor HP</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="08xxxxxxx"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Kendaraan */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Jenis Kendaraan</label>
            <input
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              placeholder="Contoh: Honda Beat / Yamaha NMAX"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Plat Nomor */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Plat Nomor</label>
            <input
              name="plate"
              value={form.plate}
              onChange={handleChange}
              placeholder="B 1234 CD"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Jenis Service */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Jenis Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="p-3 rounded-xl bg-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">Pilih layanan...</option>
              <option value="Ganti Oli">Ganti Oli</option>
              <option value="Tune Up">Tune Up</option>
              <option value="Servis Ringan">Servis Ringan</option>
              <option value="Servis Berat">Servis Berat</option>
            </select>
          </div>

          {/* Tanggal */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Tanggal Booking</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="p-3 rounded-xl bg-white/20 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Catatan */}
          <div className="flex flex-col">
            <label className="text-white mb-1">Catatan Tambahan (Opsional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Contoh: Tolong cek rem, suara mesin, dll."
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white p-3 rounded-xl font-semibold"
          >
            Submit Booking
          </button>

        </form>

      </div>
    </div>
  );
}
