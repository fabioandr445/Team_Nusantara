"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();        // perbaikan nama variabel
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();              // perbaikan spasi

    // jika login sukses, arahkan ke dashboard
    router.push("/dashboard");       // perbaikan pemanggilan router
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={u} 
        onChange={(e) => setU(e.target.value)} 
        placeholder="Username"
      />

      <input 
        type="password"
        value={p}
        onChange={(e) => setP(e.target.value)}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}
