"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const dishes = [
  {
    img: "/images/nachos.jpg",
    name: "Barbanachos",
    desc: "Nachos con mariscos, guacamole y queso cheddar",
    size: "large",
  },
  {
    img: "/images/pasta-camarones.jpg",
    name: "Pasta con Camarones",
    desc: "Fettuccine al ajillo en salsa pomodoro",
    size: "small",
  },
  {
    img: "/images/pescado-frito.jpg",
    name: "Pescado Frito",
    desc: "Filete crujiente con salsas de la casa",
    size: "medium",
  },
  {
    img: "/images/patacon.jpg",
    name: "Patacón Pirata",
    desc: "Patacón relleno con mariscos al ajillo",
    size: "medium",
  },
  {
    img: "/images/camarones-apanados.jpg",
    name: "Camarones al Panko",
    desc: "Empanizados con vegetales y salsa",
    size: "medium",
  },
  {
    img: "/images/bruschettas.jpg",
    name: "Bruschettas de Mariscos",
    desc: "Sobre tostadas con reducción de vino tinto",
    size: "large",
  },
  {
    img: "/images/filete-salsa.jpg",
    name: "Filete en Salsa",
    desc: "Filete en salsa bechamel con mariscos",
    size: "small",
  },
];

function DishCard({ dish, delay = 0 }: { dish: typeof dishes[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      style={{ minHeight: "220px" }}
    >
      <Image
        src={dish.img}
        alt={dish.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D2E]/90 via-transparent to-transparent" />
      <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/50 rounded-xl transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] leading-tight">
          {dish.name}
        </h3>
        <p className="font-dm text-[#7A8FA0] text-sm mt-0.5">{dish.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Destacados() {
  return (
    <section id="destacados" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Lo que nos hace únicos" />

      {/* Mobile: simple grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {dishes.map((d, i) => (
          <DishCard key={d.name} dish={d} delay={i * 0.07} />
        ))}
      </div>

      {/* Desktop: asymmetric bento */}
      <div className="hidden md:flex flex-col gap-4">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2" style={{ height: "360px" }}>
            <DishCard dish={dishes[0]} delay={0} />
          </div>
          <div className="col-span-1" style={{ height: "360px" }}>
            <DishCard dish={dishes[1]} delay={0.07} />
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          {[dishes[2], dishes[3], dishes[4]].map((d, i) => (
            <div key={d.name} style={{ height: "280px" }}>
              <DishCard dish={d} delay={(i + 2) * 0.07} />
            </div>
          ))}
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2" style={{ height: "320px" }}>
            <DishCard dish={dishes[5]} delay={0.35} />
          </div>
          <div className="col-span-1" style={{ height: "320px" }}>
            <DishCard dish={dishes[6]} delay={0.42} />
          </div>
        </div>
      </div>
    </section>
  );
}
