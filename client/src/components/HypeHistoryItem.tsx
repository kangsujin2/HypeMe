import type { HypeRecord } from "../types/HypeRecord";

interface HypeHistoryItemProps {
  record: HypeRecord;
}

export function HypeHistoryItem({ record }: HypeHistoryItemProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(record.createdAt));

  return (
    <article className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/80 to-amber-50/60 px-3 py-3 text-xs text-orange-900 shadow-sm hover:shadow-md transition">
      <header className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-medium text-orange-500">
          💭 my thought
        </span>
        <span className="text-[10px] text-orange-300">{formattedDate}</span>
      </header>

      <p className="mb-2 text-[11px] text-orange-600 line-clamp-2">
        {record.inputText}
      </p>

      <div className="rounded-xl bg-white/80 px-2.5 py-2 text-[11px] leading-relaxed shadow-inner">
        <span className="mr-1 text-[10px] text-orange-400">HypeMe ·</span>
        {record.outputText}
      </div>
    </article>
  );
}
