interface HypeOutputProps {
  record: string | null;
}

export function HypeOutput({ record }: HypeOutputProps) {
  if (!record) return null;

  return (
    <section className="mt-3 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 border border-orange-100 px-4 py-3 text-sm text-orange-900 shadow-sm relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-orange-200/40" />
      <div className="absolute -left-4 -bottom-6 h-14 w-14 rounded-full bg-amber-200/40" />

      <p className="relative whitespace-pre-line leading-relaxed">
        <span className="mr-2 text-xs text-orange-400">HypeMe says ·</span>
        {record}
      </p>
    </section>
  );
}
