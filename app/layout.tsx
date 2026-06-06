import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barba Negra Sea Food | Mariscos en Barva, Heredia",
  description: "Restaurante de mariscos en Barva, Heredia. Ceviches, camarones, pescado, pastas y más. Martes a Domingo 12–8:45pm. ⭐ 4.9 en Google.",
  metadataBase: new URL("https://barbanegra.cr"),
  openGraph: {
    title: "Barba Negra Sea Food",
    description: "Restaurante de mariscos en Barva, Heredia. Ceviches, camarones, pescado, pastas y más.",
    images: ["/images/pasta-camarones.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1D2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
