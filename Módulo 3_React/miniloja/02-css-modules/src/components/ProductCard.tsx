import React from "react";
import type { Product } from "../types";
import { Button } from "./Button";
import s from "./ProductCard.module.css";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({ product }: { product: Product }) {
  const { id, title, price, rating, tag, image } = product;
  const stars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));

  return (
    <article className={s.card} tabIndex={0} aria-labelledby={`p-${id}-title`}>
      <img className={s.cardImg} src={image} alt={`Imagem de ${title}`} loading="lazy" />
      <div className={s.cardBody}>
        <h3 id={`p-${id}-title`} className={s.title}>{title}</h3>
        <div className={s.row}>
          <span className={s.price}>{formatBRL(price)}</span>
          {tag && <span className={s.badge} aria-label={`Tag: ${tag}`}>{tag}</span>}
        </div>
        <span aria-label={`Avaliação: ${rating} de 5`} className={s.muted} style={{ letterSpacing: 1 }}>
          {stars}
        </span>
        <div className={s.row}>
          <span className={s.muted}>Entrega rápida</span>
          <Button variant="solid" aria-label={`Adicionar ${title} ao carrinho`}>
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}

