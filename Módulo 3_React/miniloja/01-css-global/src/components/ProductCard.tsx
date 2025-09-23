import React from "react";
import type { Product } from "../types";
import { Button } from "./Button";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({ product }: { product: Product }) {
  const { title, price, rating, tag, image } = product;
  const stars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));

  return (
    <article className="card" tabIndex={0} aria-labelledby={`p-${product.id}-title`}>
      <img className="card-img" src={image} alt={`Imagem de ${title}`} loading="lazy" />
      <div className="card-body">
        <h3 id={`p-${product.id}-title`} className="title">{title}</h3>
        <div className="row">
          <span className="price">{formatBRL(price)}</span>
          {tag && <span className="badge" aria-label={`Tag: ${tag}`}>{tag}</span>}
        </div>
        <span aria-label={`Avaliação: ${rating} de 5`} className="muted" style={{ letterSpacing: 1 }}>
          {stars}
        </span>
        <div className="row">
          <span className="muted">Entrega rápida</span>
          <Button variant="solid" onClick={() => { /* noop */ }} aria-label={`Adicionar ${title} ao carrinho`}>
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
