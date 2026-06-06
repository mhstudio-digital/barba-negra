"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay } as const,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Desktop: right image */}
      <div className="absolute inset-0 md:left-[45%] left-0">
        <Image
          src="/images/pasta-camarones.jpg"
          alt="Pasta con Camarones Barba Negra"
          fill
          className="object-cover"
          priority
        />
        {/* Desktop gradient overlay left-to-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D2E] via-[#0B1D2E]/70 to-transparent hidden md:block" />
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#0B1D2E]/75 md:hidden" />
      </div>

      {/* Desktop navy left panel */}
      <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-[#0B1D2E] hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-0">
        <div className="md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            {...fadeUp(0)}
            className="font-cormorant font-bold text-[42px] md:text-[72px] leading-tight text-[#F5F0E8] mb-4"
          >
            El sabor del mar,{" "}
            <span className="text-[#C9A84C]">en el corazón</span>{" "}
            de Heredia
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-dm text-[#7A8FA0] text-base md:text-lg mb-8"
          >
            Mariscos frescos · Barva, Heredia · Mar–Dom 12pm–8:45pm
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a
              href="#menu"
              className="px-7 py-3 bg-[#C9A84C] text-[#0B1D2E] font-dm font-medium rounded-full hover:bg-[#9A7A35] transition-colors text-center"
            >
              Ver Menú
            </a>
            <a
              href="https://maps.google.com/?q=Barva+Heredia+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-[#F5F0E8] text-[#F5F0E8] font-dm font-medium rounded-full hover:bg-white/10 transition-colors text-center"
            >
              Cómo llegar
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            className="mt-8 flex items-center gap-3 border border-[#C9A84C]/30 rounded-full px-4 py-2"
          >
            <span className="text-[#C9A84C] text-lg">⭐</span>
            <span className="font-dm text-[#F5F0E8] text-sm">
              <strong>4.9</strong>{" "}
              <span className="text-[#7A8FA0]">· +60 reseñas Google</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bounce-chevron">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
