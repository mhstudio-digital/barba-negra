"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "4.9", label: "Calificación", icon: "⭐" },
  { value: "+60", label: "Reseñas" },
  { value: "3 Apps", label: "Delivery" },
  { value: "Mar–Dom", label: "Abiertos" },
];

export default function Historia() {
  return (
    <section id="nosotros" className="py-20 bg-[#0F2337]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="md:w-[45%]"
          >
            <div className="mb-2 text-[#C9A84C] font-dm text-sm uppercase tracking-widest">
              Nuestra Historia
            </div>
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-[#F5F0E8] mb-6 leading-tight">
              Del océano a tu mesa
            </h2>
            <p className="font-dm text-[#7A8FA0] leading-relaxed mb-10 text-base">
              Nacimos del amor por el mar y la cocina. En Barba Negra preparamos
              cada plato con mariscos frescos, técnica y pasión. Desde nuestro
              rincón en Barva, Heredia, llevamos el sabor del océano a tu mesa
              con el ambiente acogedor que mereces.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="font-cormorant text-[48px] font-bold text-[#C9A84C] leading-none">
                    {s.value}
                  </div>
                  <div className="font-dm text-[12px] text-[#7A8FA0] uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:w-[55%] relative rounded-2xl overflow-hidden"
            style={{ height: "480px" }}
          >
            <Image
              src="/images/burger.jpg"
              alt="Barba Negra - Nuestra Historia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2337]/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
