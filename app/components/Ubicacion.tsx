"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Ubicacion() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Encuéntranos" />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 space-y-6"
          >
            <div className="flex gap-4">
              <span className="text-[#C9A84C] text-xl mt-0.5">📍</span>
              <div>
                <p className="font-dm text-[#F5F0E8] leading-relaxed">
                  Jardines del Beneficio 3C, Barva, Heredia
                </p>
                <p className="font-dm text-[#7A8FA0] text-sm mt-1">
                  Del Salón Italia 300m al este, Plaza Vila
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#C9A84C] text-xl mt-0.5">📞</span>
              <a
                href="tel:+50664110563"
                className="font-dm text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
              >
                +506 6411-0563
              </a>
            </div>

            <div className="flex gap-4">
              <span className="text-[#C9A84C] text-xl mt-0.5">🕐</span>
              <div>
                <p className="font-dm text-[#F5F0E8]">
                  Martes a Domingo: 12:00md – 8:45pm
                </p>
                <p className="font-dm text-[#7A8FA0] text-sm mt-1">
                  Lunes: Cerrado
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Barva+Heredia+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#0B1D2E] transition-all font-dm font-medium text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Abrir en Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-3/5 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5!2d-84.1!3d10.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmFydmEsIEhlcmVkaWE!5e0!3m2!1ses!2scr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barba Negra Sea Food - Ubicación"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
