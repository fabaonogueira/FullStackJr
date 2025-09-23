import styled from "styled-components";
import React from "react";
import type { Product } from "../types";
import { Button } from "./Button";

const Card = styled.article`
  background:${p=>p.theme.colors.card}; border:1px solid ${p=>p.theme.colors.border};
  border-radius:${p=>p.theme.radii.card}; overflow:hidden;
  transition: transform ${p=>p.theme.timing}, box-shadow ${p=>p.theme.timing}, border-color ${p=>p.theme.timing};
  &:hover { transform: translateY(-2px); box-shadow: ${p=>p.theme.shadow}; }
  &:focus-within { box-shadow: 0 0 0 3px ${p=>p.theme.colors.ring}; }
`;
const Img = styled.img`
  width:100%; aspect-ratio:1/1; object-fit:cover;
  background: linear-gradient(180deg, #f3f4f6, #e5e7eb);
`;
const Body = styled.div` padding:16px; display:grid; gap:12px; `;
const Title = styled.h3`
  color:${p=>p.theme.colors.fg}; font-weight:600; line-height:1.25;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; text-overflow:ellipsis;
`;
const Row = styled.div` display:flex; align-items:center; justify-content:space-between; gap:12px; `;
const Price = styled.span` color:${p=>p.theme.colors.fg}; font-weight:700; `;
const Muted = styled.span` color:${p=>p.theme.colors.muted}; font-size:.9rem; `;
const Tag = styled.span`
  display:inline-block; padding:2px 8px; font-size:12px; border-radius:999px;
  border:1px solid ${p=>p.theme.colors.border};
  background: color-mix(in oklab, ${p=>p.theme.colors.accent} 12%, ${p=>p.theme.colors.card});
`;

function brl(v: number){ return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }

export function ProductCard({ product }: { product: Product }) {
  const { id, title, price, rating, tag, image } = product;
  const stars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
  return (
    <Card tabIndex={0} aria-labelledby={`p-${id}-title`}>
      <Img src={image} alt={`Imagem de ${title}`} loading="lazy" />
      <Body>
        <Title id={`p-${id}-title`}>{title}</Title>
        <Row>
          <Price>{brl(price)}</Price>
          {tag && <Tag aria-label={`Tag: ${tag}`}>{tag}</Tag>}
        </Row>
        <Muted aria-label={`Avaliação: ${rating} de 5`}>{stars}</Muted>
        <Row>
          <Muted>Entrega rápida</Muted>
          <Button>Adicionar</Button>
        </Row>
      </Body>
    </Card>
  );
}
