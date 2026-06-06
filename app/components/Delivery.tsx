"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const apps = [
  {
    name: "Uber Eats",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 3v5.586l3.707 3.707-1.414 1.414L9 14.414V7h2z" />
      </svg>
    ),
    color: "#06C167",
    link: "#",
  },
  {
    name: "DiDi Food",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    color: "#FF6B00",
    link: "#",
  },
  {
    name: "Rappi",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    color: "#FF441B",
    link: "#",
  },
];

export default function Delivery() {
  return (
    <section id="pedido" className="py-20 bg-[#0F2337]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Pedí desde donde estés" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#162F45] border border-[#162F45] hover:border-[#C9A84C]/40 rounded-2xl p-8 flex flex-col items-center gap-5 transition-all duration-200"
            >
              <div style={{ color: app.color }}>{app.icon}</div>
              <h3 className="font-cormorant font-semibold text-2xl text-[#F5F0E8]">
                {app.name}
              </h3>
              <a
                href={app.link}
                className="px-6 py-2.5 bg-[#C9A84C] text-[#0B1D2E] font-dm font-medium rounded-full text-sm hover:bg-[#9A7A35] transition-colors"
              >
                Pedir ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
