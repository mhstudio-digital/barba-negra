export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      { name: "Patacones", description: "con guacamol, frijoles y pico de gallo", price: "₡3,500" },
      { name: "Patacones con Mariscos", description: "con frijoles, guacamole y mariscada al ajillo", price: "₡4,400" },
      { name: "Patacón Pirata (Pollo)", description: "patacón relleno con pollo", price: "₡5,200" },
      { name: "Patacón Pirata (Camarones)", description: "patacón relleno con camarones", price: "₡6,300" },
      { name: "Bruschettas de Mariscos", description: "tostadas artesanales con mariscos salteados", price: "₡4,500" },
      { name: "Deditos de Pollo", description: "acompañados de papas fritas", price: "₡3,700" },
      { name: "Deditos de Pescado", price: "S/P" },
      { name: "Deditos de Queso", price: "S/P" },
      { name: "Papas Fritas Pequeñas", price: "₡1,300" },
      { name: "Papas Fritas Grandes", price: "₡2,500" },
      { name: "Canastas Rellenas de Camarón", price: "₡4,400" },
      { name: "Mix Familiar", description: "deditos de pollo, pescado, queso y papas fritas", price: "₡6,900" },
    ],
  },
  {
    id: "ceviches",
    label: "Ceviches",
    items: [
      { name: "Ceviche de Pescado Pequeño", price: "₡3,200" },
      { name: "Ceviche de Pescado Grande", price: "₡4,500" },
      { name: "Ceviche Mixto Pequeño", price: "₡3,700" },
      { name: "Ceviche Mixto Grande", price: "₡5,100" },
      { name: "Ceviche Caribeño Pequeño", price: "₡3,800" },
      { name: "Ceviche Caribeño Grande", price: "₡5,200" },
      { name: "Ceviche Trilogía Pequeño", price: "₡3,900" },
      { name: "Ceviche Trilogía Grande", price: "₡5,500" },
    ],
  },
  {
    id: "fuertes",
    label: "Platos Fuertes",
    items: [
      { name: "Camarones al Ajillo", description: "2 acompañamientos a elegir", price: "₡7,300" },
      { name: "Camarones al Panko", description: "2 acompañamientos a elegir", price: "₡7,300" },
      { name: "Filet de Pollo a la Plancha", description: "2 acompañamientos a elegir", price: "₡5,700" },
      { name: "Filet de Pollo Empanizado", description: "2 acompañamientos a elegir", price: "₡5,700" },
      { name: "Filet de Pescado a la Plancha", description: "2 acompañamientos a elegir", price: "₡6,200" },
      { name: "Filet de Pescado Empanizado", description: "2 acompañamientos a elegir", price: "₡6,200" },
      { name: "Filet de Pescado en Salsa Pomodoro con Mariscos", description: "2 acompañamientos a elegir", price: "₡7,700" },
      { name: "Filet de Pescado en Salsa Bechamel con Mariscos", description: "2 acompañamientos a elegir", price: "₡7,800" },
      { name: "Filet de Corvina", description: "2 acompañamientos a elegir", price: "₡7,500" },
      { name: "Mariscada al Ajillo", description: "2 acompañamientos a elegir", price: "₡6,200" },
      { name: "Pescado Entero", price: "S/P" },
    ],
  },
  {
    id: "arroces",
    label: "Arroces",
    items: [
      { name: "Arroz con Camarones", description: "con papas fritas y ensalada", price: "₡6,100" },
      { name: "Arroz con Calamar", description: "con papas fritas y ensalada", price: "₡5,100" },
      { name: "Arroz con Pollo", description: "con papas fritas y ensalada", price: "₡5,500" },
      { name: "Arroz con Mariscos", description: "con papas fritas y ensalada", price: "₡6,500" },
      { name: "Camarones con Arroz", description: "con papas fritas y ensalada", price: "₡7,700" },
    ],
  },
  {
    id: "pastas",
    label: "Pastas",
    items: [
      { name: "Pasta Frutti di Mar", description: "Spaguetti o Fetuccini en salsa a elección", price: "₡6,500" },
      { name: "Pasta con Camarones", description: "Spaguetti o Fetuccini en salsa a elección", price: "₡6,500" },
      { name: "Pasta con Pollo", description: "Spaguetti o Fetuccini en salsa a elección", price: "₡6,000" },
      { name: "Pasta Mantequilla, Ajo y Queso Parmesano", price: "₡4,900" },
    ],
  },
  {
    id: "sopas",
    label: "Sopas",
    items: [
      { name: "Sopa de Pescado en Agua", description: "con arroz blanco", price: "₡4,300" },
      { name: "Sopa de Pescado en Leche", description: "con arroz blanco", price: "₡5,100" },
      { name: "Sopa de Mariscos en Agua", description: "con arroz blanco", price: "₡4,800" },
      { name: "Sopa de Mariscos en Leche", description: "con arroz blanco", price: "₡5,100" },
      { name: "Sopa Caribeña en Agua", description: "con arroz blanco", price: "₡4,800" },
      { name: "Sopa Caribeña en Leche", description: "con arroz blanco", price: "₡5,400" },
    ],
  },
  {
    id: "ensaladas",
    label: "Ensaladas",
    items: [
      { name: "Ensalada de Pollo a la Parrilla", price: "₡6,200" },
      { name: "Ensalada de Pescado", price: "₡6,200" },
      { name: "Ensalada de Camarones", price: "₡6,600" },
    ],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas",
    items: [
      { name: "Hamburguesa con Filet de Pollo BBQ o Búfalo", description: "con papas fritas", price: "₡5,700" },
      { name: "Hamburguesa con Filet de Pescado BBQ o Búfalo", description: "con papas fritas", price: "₡5,700" },
      { name: "Hamburguesa Sencilla", description: "con papas fritas", price: "₡3,700" },
      { name: "Hamburguesa Mar y Tierra", description: "con papas fritas", price: "₡6,700" },
      { name: "Barbanachos", description: "nachos con mariscos, guacamole y queso cheddar", price: "₡5,700" },
      { name: "Casado (Mar–Vie 12md–3pm)", description: "Fajitas de Pollo o Res · Arroz, frijoles, vegetales, plátano, ensalada + bebida", price: "₡3,900" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Limonada Hierbabuena en Agua", price: "₡2,100" },
      { name: "Limonada Hierbabuena en Leche", price: "₡2,300" },
      { name: "Sandía en Agua", price: "₡2,100" },
      { name: "Sandía en Leche", price: "₡2,300" },
      { name: "Sandía Hierbabuena en Agua", price: "₡2,100" },
      { name: "Sandía Hierbabuena en Leche", price: "₡2,300" },
      { name: "Piña en Agua", price: "₡2,100" },
      { name: "Piña en Leche", price: "₡2,300" },
      { name: "Piña Hierbabuena en Agua", price: "₡2,100" },
      { name: "Piña Hierbabuena en Leche", price: "₡2,300" },
      { name: "Mora en Agua", price: "₡2,100" },
      { name: "Mora en Leche", price: "₡2,300" },
      { name: "Fresa en Agua", price: "₡2,100" },
      { name: "Fresa en Leche", price: "₡2,300" },
      { name: "Mango en Agua (temporada)", price: "₡2,100" },
      { name: "Mango en Leche (temporada)", price: "₡2,300" },
      { name: "Gaseosas 600ml", price: "₡1,800" },
    ],
  },
  {
    id: "adicionales",
    label: "Adicionales",
    items: [
      { name: "Papas Fritas Pequeñas", price: "₡1,300" },
      { name: "Papas Fritas Grandes", price: "₡2,500" },
      { name: "Guacamole", price: "₡1,000" },
      { name: "Arroz Blanco", price: "₡1,200" },
      { name: "Frijoles Molidos", price: "₡800" },
      { name: "Pico de Gallo", price: "₡800" },
      { name: "Orden de Vegetales", price: "₡1,300" },
      { name: "Ensalada de Temporada", price: "₡1,200" },
      { name: "Puré", price: "₡1,500" },
      { name: "Orden de Papas Salteadas", price: "₡1,300" },
      { name: "Salsa Tártara", price: "₡600" },
      { name: "Salsas", price: "₡500" },
    ],
  },
];
