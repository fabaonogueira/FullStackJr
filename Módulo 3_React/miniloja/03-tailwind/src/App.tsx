import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import { SkeletonCard } from "./components/Skeleton";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 800); return () => clearTimeout(t); }, []);
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-4 pt-6 pb-12" aria-busy={loading} aria-live="polite">
        <section className="grid grid-cols-1 gap-4 sm481:grid-cols-2 md769:grid-cols-3 lg1025:grid-cols-4">
          {loading ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                   : products.map(p => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </div>
  );
}

