import React from "react";

export function SkeletonCard() {
  return (
    <article className="card" aria-hidden="true">
      <div className="skel-block" style={{ width: "100%", aspectRatio: "1/1" }} />
      <div className="card-body">
        <div className="skel-block" style={{ height: 20, width: "80%" }} />
        <div className="skel-block" style={{ height: 16, width: "40%" }} />
        <div className="row">
          <div className="skel-block" style={{ height: 28, width: 72 }} />
          <div className="skel-block" style={{ height: 36, width: 120 }} />
        </div>
      </div>
    </article>
  );
}
