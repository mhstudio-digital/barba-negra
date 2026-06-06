import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destacados from "./components/Destacados";
import Menu from "./components/Menu";
import Galeria from "./components/Galeria";
import Historia from "./components/Historia";
import Delivery from "./components/Delivery";
import Ubicacion from "./components/Ubicacion";
import Reservar from "./components/Reservar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destacados />
      <Menu />
      <Galeria />
      <Historia />
      <Delivery />
      <Ubicacion />
      <Reservar />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
