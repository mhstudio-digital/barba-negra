"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#pedido", label: "Pedido" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[#0B1D2E]/85 shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Barba Negra Sea Food"
              width={120}
              height={48}
              style={{ filter: "invert(1) brightness(10)" }}
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#7A8FA0] hover:text-[#F5F0E8] transition-colors text-sm font-dm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              className="ml-2 px-5 py-2 text-sm font-dm font-medium border border-[#C9A84C] text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#0B1D2E] transition-all duration-200"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="block w-6 h-0.5 bg-[#F5F0E8]" />
            <span className="block w-6 h-0.5 bg-[#F5F0E8]" />
            <span className="block w-4 h-0.5 bg-[#F5F0E8]" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={closeDrawer}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-[#0B1D2E] flex flex-col px-8 py-10"
            >
              <button
                className="self-end mb-10 text-[#7A8FA0] hover:text-[#F5F0E8]"
                onClick={closeDrawer}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-[#F5F0E8] font-cormorant text-2xl font-semibold hover:text-[#C9A84C] transition-colors"
                    onClick={closeDrawer}
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#reservar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.06 }}
                  className="mt-4 px-5 py-3 text-center border border-[#C9A84C] text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#0B1D2E] transition-all font-dm font-medium"
                  onClick={closeDrawer}
                >
                  Reservar Mesa
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
