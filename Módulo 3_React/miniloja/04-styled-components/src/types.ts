export type Tag = "Novo" | "Promo" | null;

export interface Product {
  id: number;
  title: string;
  price: number; // em BRL
  rating: number; // 0..5
  tag: Tag;
  image: string; // url do placeholder 1:1
}
