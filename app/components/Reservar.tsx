"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Reservar() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "",
    nota: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Quiero reservar mesa en Barba Negra.\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nFecha: ${form.fecha}\nHora: ${form.hora}\nPersonas: ${form.personas}${form.nota ? `\nNota: ${form.nota}` : ""}`;
    window.open(`https://wa.me/50664110563?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass =
    "w-full bg-[#0B1D2E]/60 border border-[#162F45] focus:border-[#C9A84C]/60 rounded-lg px-4 py-3 text-[#F5F0E8] font-dm text-sm outline-none placeholder-[#7A8FA0] transition-colors";

  return (
    <section id="reservar" className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/ensalada-colorida.jpg"
          alt="Reservar mesa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1D2E]/85" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-[#F5F0E8]">
            Reservar Mesa
          </h2>
          <div className="mt-3 mx-auto w-20 h-[2px] bg-[#C9A84C] rounded-full" />
          <p className="font-dm text-[#7A8FA0] mt-4 text-sm">
            Te contactaremos para confirmar tu reserva por WhatsApp
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            name="nombre"
            placeholder="Nombre completo"
            required
            value={form.nombre}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            required
            value={form.telefono}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="fecha"
            type="date"
            required
            value={form.fecha}
            onChange={handleChange}
            className={inputClass}
            style={{ colorScheme: "dark" }}
          />
          <input
            name="hora"
            type="time"
            required
            value={form.hora}
            onChange={handleChange}
            className={inputClass}
            style={{ colorScheme: "dark" }}
          />
          <select
            name="personas"
            required
            value={form.personas}
            onChange={handleChange}
            className={`${inputClass} col-span-1`}
          >
            <option value="" disabled>
              Número de personas
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "persona" : "personas"}
              </option>
            ))}
            <option value="10+">Más de 10</option>
          </select>
          <textarea
            name="nota"
            placeholder="Nota opcional (alergias, ocasión especial...)"
            value={form.nota}
            onChange={handleChange}
            rows={3}
            className={`${inputClass} sm:col-span-2 resize-none`}
          />

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full font-dm font-medium text-white flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirmar por WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
