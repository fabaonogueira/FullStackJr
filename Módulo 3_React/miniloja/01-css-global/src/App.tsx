import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import { SkeletonCard } from "./components/Skeleton";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800); // simula atraso
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navbar />
      <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <section className="grid" aria-busy={loading} aria-live="polite">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map(p => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </div>
  );
}
