export function SkeletonCard() {
  return (
    <article className="bg-[var(--card)] border border-[var(--border)] rounded-card overflow-hidden">
      <div className="skel w-full aspect-square" />
      <div className="p-4 grid gap-3">
        <div className="skel h-5 w-4/5 rounded-md" />
        <div className="skel h-4 w-2/5 rounded-md" />
        <div className="flex items-center justify-between">
          <div className="skel h-7 w-20 rounded-full" />
          <div className="skel h-9 w-28 rounded-full" />
        </div>
      </div>
    </article>
  );
}
