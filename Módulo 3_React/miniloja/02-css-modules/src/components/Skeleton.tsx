import React from "react";
import s from "./Skeleton.module.css";

export function SkeletonCard() {
  return (
    <article className={s.card} aria-hidden="true">
      <div className={s.skelBlock} style={{ width: "100%", aspectRatio: "1/1" }} />
      <div className={s.body}>
        <div className={s.skelBlock} style={{ height: 20, width: "80%", borderRadius: 8 }} />
        <div className={s.skelBlock} style={{ height: 16, width: "40%", borderRadius: 8 }} />
        <div className={s.row}>
          <div className={s.skelBlock} style={{ height: 28, width: 72, borderRadius: 999 }} />
          <div className={s.skelBlock} style={{ height: 36, width: 120, borderRadius: 999 }} />
        </div>
      </div>
    </article>
  );
}

