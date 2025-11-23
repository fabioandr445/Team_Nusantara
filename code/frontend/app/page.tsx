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

  
}
