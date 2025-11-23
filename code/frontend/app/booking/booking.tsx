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

 
}
