"use client"; 
// Komponen ini berjalan di client-side (karena pakai event & router)

import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();     // digunakan untuk navigasi antar halaman
  const path = usePathname();     // digunakan untuk mengetahui halaman aktif sekarang

  // Daftar menu sidebar yang akan ditampilkan
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Booking Service", path: "/dashboard/booking" },
    { name: "Status Service", path: "/dashboard/status" },
    { name: "Customer", path: "/dashboard/customer" },
    { name: "Mekanik", path: "/dashboard/mekanik" },
    { name: "Riwayat", path: "/dashboard/riwayat" },
    { name: "Pengaturan", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col py-6 shadow-lg">
      {/* Judul di sidebar */}
      <h1 className="text-2xl font-bold px-6 mb-8">Bengkel Admin</h1>

      {/* Daftar Menu */}
      <nav className="flex flex-col gap-2 px-4">
        {menu.map((item) => (
          <button
            key={item.path}

            // tombol navigasi
            onClick={() => router.push(item.path)}

            // jika path sama dengan halaman sekarang, beri warna aktif
            className={`text-left px-4 py-2 rounded-lg 
              ${path === item.path ? "bg-blue-600" : "hover:bg-gray-700"}`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
