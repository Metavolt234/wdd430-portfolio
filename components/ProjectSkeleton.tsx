export default function ProjectSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2" aria-hidden="true">
      {[0, 1].map((item) => (
        <article
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 h-6 w-32 animate-pulse rounded-full bg-blue-100" />
          <div className="mb-3 h-7 w-3/4 animate-pulse rounded bg-slate-200" />
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-slate-100" />
          <div className="mb-4 h-4 w-5/6 animate-pulse rounded bg-slate-100" />
          <div className="mb-4 h-4 w-2/3 animate-pulse rounded bg-slate-100" />
          <div className="h-9 w-28 animate-pulse rounded-full bg-slate-200" />
        </article>
      ))}
    </div>
  );
}
