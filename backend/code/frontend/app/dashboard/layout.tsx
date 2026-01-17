import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    // Layout utama dashboard (horizontal: sidebar | konten)
    <div className="flex">

      {/* Sidebar di sebelah kiri */}
      <Sidebar />

      {/* Bagian kanan: Navbar + konten */}
      <div className="flex-1 bg-gray-100 min-h-screen">

        {/* Navbar di bagian atas */}
        <Navbar />

        {/* Konten halaman otomatis dimasukkan di sini */}
        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
