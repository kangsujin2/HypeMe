import type { HypeRecord } from "../types/HypeRecord";
import { HypeHistoryItem } from "./HypeHistoryItem";

interface HypeHistoryListProps {
  records: HypeRecord[];
}

export function HypeHistory({ records }: HypeHistoryListProps) {
  if (records.length === 0) {
    return (
      <section className="mt-6 rounded-2xl border border-dashed border-orange-100 bg-white/60 px-4 py-3 text-[11px] text-orange-400">
        <p className="font-medium mb-1">No hype yet 🫧</p>
        <p>
          Write a line about your day, and your hype messages will start piling
          up here.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-6">
      <header className="mb-2 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-orange-600 flex items-center gap-1">
          Your hype history
          <span className="text-[10px] text-orange-400">
            ({records.length})
          </span>
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {records.map((record) => (
          <HypeHistoryItem key={record.id} record={record} />
        ))}
      </div>
    </section>
  );
}
