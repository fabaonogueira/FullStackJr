import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import styled from "styled-components";

const Grid = styled.section`
  display:grid; gap:16px; grid-template-columns:repeat(1, minmax(0, 1fr));
  @media (min-width: 481px) and (max-width: 768px) { grid-template-columns: repeat(2,1fr); }
  @media (min-width: 769px) and (max-width: 1024px) { grid-template-columns: repeat(3,1fr); }
  @media (min-width: 1025px) { grid-template-columns: repeat(4,1fr); }
`;

function SkeletonCard(){
  return (
    <div style={{ background:"#0000", border:`1px solid var(--noop)`, borderRadius:12, overflow:"hidden" }}>
      <div style={{ width:"100%", aspectRatio:"1/1", background:"linear-gradient(90deg, rgba(0,0,0,.08), rgba(0,0,0,.02), rgba(0,0,0,.08))",
        backgroundSize:"200% 100%", animation:"shimmer 1.2s infinite" }} />
      <div style={{ padding:16, display:"grid", gap:12 }}>
        <div className="skel" style={{ height:20, width:"80%", borderRadius:8 }} />
        <div className="skel" style={{ height:16, width:"40%", borderRadius:8 }} />
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <div className="skel" style={{ height:28, width:72, borderRadius:999 }} />
          <div className="skel" style={{ height:36, width:120, borderRadius:999 }} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 800); return () => clearTimeout(t); }, []);
  return (
    <div>
      <Navbar />
      <main className="container" style={{ paddingTop:24, paddingBottom:48 }} aria-busy={loading} aria-live="polite">
        <Grid>
          {loading ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                   : products.map(p => <ProductCard key={p.id} product={p} />)}
        </Grid>
      </main>
    </div>
  );
}
