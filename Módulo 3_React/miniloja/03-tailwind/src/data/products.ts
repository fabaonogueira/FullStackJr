import type { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    title: "Fone Bluetooth Over-Ear com Cancelamento de Ruído",
    price: 399.9,
    rating: 4.5,
    tag: "Promo",
    image: "/images/1.jpg",   // ← agora local
  },
  {
    id: 2,
    title: "Teclado Mecânico RGB ABNT2 Switch Marrom",
    price: 299.9,
    rating: 4.2,
    tag: "Novo",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Mouse Óptico 8.000 DPI com Botões Laterais",
    price: 149.9,
    rating: 4.0,
    tag: null,
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "Webcam Full HD com Microfone Embutido",
    price: 199.9,
    rating: 3.8,
    tag: null,
    image: "/images/4.jpg",
  },
  {
    id: 5,
    title: "Monitor 27” IPS 144Hz 1ms",
    price: 1899.0,
    rating: 4.7,
    tag: "Promo",
    image: "/images/5.jpg",
  },
  {
    id: 6,
    title: "Cadeira Ergonômica com Apoio Lombar",
    price: 999.0,
    rating: 4.6,
    tag: "Novo",
    image: "/images/6.jpg",
  },
];
