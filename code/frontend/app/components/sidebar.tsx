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

 
}
