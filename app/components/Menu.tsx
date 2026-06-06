"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { menuCategories } from "../data/menu";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("entradas");

  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-20 bg-[#0F2337]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nuestro Menú" />

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto tabs-scroll pb-3 mb-8">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-dm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-[#C9A84C] text-[#0B1D2E] font-semibold"
                  : "border border-[#162F45] text-[#7A8FA0] hover:border-[#C9A84C]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="bg-[#162F45] border border-[#162F45] hover:border-[#C9A84C]/40 rounded-xl p-4 transition-all duration-200"
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <h3 className="font-cormorant text-[18px] text-[#F5F0E8] leading-snug">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="font-dm text-[13px] text-[#7A8FA0] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="font-dm text-[#C9A84C] font-medium text-sm shrink-0 mt-0.5">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
