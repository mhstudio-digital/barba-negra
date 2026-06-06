"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const images = [
  { src: "/images/patacon.jpg", alt: "Patacón Pirata" },
  { src: "/images/burger.jpg", alt: "Hamburguesa" },
  { src: "/images/camarones-apanados.jpg", alt: "Camarones al Panko" },
  { src: "/images/ensalada-pollo.jpg", alt: "Ensalada de Pollo" },
  { src: "/images/pasta-camarones.jpg", alt: "Pasta con Camarones" },
  { src: "/images/pescado-frito.jpg", alt: "Pescado Frito" },
  { src: "/images/nachos.jpg", alt: "Barbanachos" },
  { src: "/images/bruschettas.jpg", alt: "Bruschettas de Mariscos" },
  { src: "/images/filete-salsa.jpg", alt: "Filete en Salsa" },
  { src: "/images/ensalada-colorida.jpg", alt: "Ensalada Colorida" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Galería" />

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="break-inside-avoid mb-3 rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0B1D2E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
