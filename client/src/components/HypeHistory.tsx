import type { HypeRecord } from "../types/HypeRecord";
import { HypeHistoryItem } from "./HypeHistoryItem";

interface HypeHistoryListProps {
  records: HypeRecord[];
}

export function HypeHistory({ records }: HypeHistoryListProps) {
  if (records.length === 0) {
    return (
      <section
        className="
          border-2 border-[#2A2A2A]
          rounded-xl
          bg-[#FFF8ED]
          px-6 py-5
          text-[#2A2A2A]
        "
      >
        <p className="mb-1 text-[11px] font-mono text-[#6F7F3C]">
          NO SIGNAL DETECTED
        </p>
        <p className="text-sm leading-relaxed">
          Write something and your hype signals will start showing up here.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-3">
      {/* header */}
      <header className="flex items-center justify-between">
        <h2 className="text-[11px] font-mono text-[#6F7F3C] tracking-wide">
          HYPE LOG
        </h2>
        <span className="text-[10px] font-mono text-[#A89F94]">
          {records.length} ENTRIES
        </span>
      </header>

      {/* list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((record) => (
          <HypeHistoryItem key={record.id} record={record} />
        ))}
      </div>
    </section>
  );
}
