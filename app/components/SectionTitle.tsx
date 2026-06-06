"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-[#F5F0E8]">
        {title}
      </h2>
      <div className="mt-3 mx-auto w-20 h-[2px] bg-[#C9A84C] rounded-full" />
    </motion.div>
  );
}
