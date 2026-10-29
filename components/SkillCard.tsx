export interface Typeface {
  name: string;
  description: string;
  accent: string;
}

interface SkillCardProps {
  typeface: Typeface;
}

export default function SkillCard({ typeface }: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="mb-3 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
        {typeface.accent}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{typeface.name}</h3>
      <p className="text-base leading-7 text-slate-600">{typeface.description}</p>
    </article>
  );
}
