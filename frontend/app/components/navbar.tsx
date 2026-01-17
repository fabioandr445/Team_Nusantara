"use client";
// Navbar butuh client component karena ada rencana tombol logout, notif, dll

export default function Navbar() {
  return (
    // container navbar
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      {/* Judul Halaman */}
      <h2 className="text-xl font-semibold">Sistem Booking Bengkel</h2>

      {/* Profil atau ikon admin */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Admin</span>

        {/* Avatar admin */}
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>

    </div>
  );
}
