import React from "react";
import type { Product } from "../types";
import { Button } from "./Button";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({ product }: { product: Product }) {
  const { id, title, price, rating, tag, image } = product;
  const stars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
  return (
    <article tabIndex={0}
      className="bg-[var(--card)] border border-[var(--border)] rounded-card overflow-hidden transition-transform duration-180 ease-smooth hover:-translate-y-0.5 hover:shadow-card dark:hover:shadow-cardDark focus-within:ring-4 focus-within:ring-[var(--ring)]">
      <img className="w-full aspect-square object-cover bg-gradient-to-b from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900"
           src={image} alt={`Imagem de ${title}`} loading="lazy" />
      <div className="p-4 grid gap-3">
        <h3 id={`p-${id}-title`} className="font-semibold text-[var(--fg)] leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between gap-3">
          <span className="font-bold text-[var(--fg)]">{formatBRL(price)}</span>
          {tag && <span className="px-2 py-0.5 text-xs rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--accent)_12%,var(--card))]">{tag}</span>}
        </div>
        <span aria-label={`Avaliação: ${rating} de 5`} className="text-sm tracking-wide text-[var(--muted)]">{stars}</span>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--muted)]">Entrega rápida</span>
          <Button>Adicionar</Button>
        </div>
      </div>
    </article>
  );
}
