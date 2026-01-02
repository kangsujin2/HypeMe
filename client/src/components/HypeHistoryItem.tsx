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
    <article
      className="
        relative
        bg-[#FFF8ED]
        border-2 border-[#2A2A2A]
        rounded-xl
        px-4 py-4
        text-[#2A2A2A]
      "
    >
      {/* header */}
      <header className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono text-[#6F7F3C]">LOG ENTRY</span>
        <span className="text-[10px] font-mono text-[#A89F94]">
          {formattedDate}
        </span>
      </header>

      {/* input text */}
      <p className="mb-3 text-[13px] leading-snug text-[#2A2A2A] line-clamp-2">
        “{record.inputText}”
      </p>

      {/* output panel */}
      <div
        className="
          border-2 border-[#2A2A2A]
          rounded-md
          bg-[#FFF3DB]
          px-3 py-2
          text-[13px]
          leading-relaxed
        "
      >
        <span className="mr-1 font-mono text-[10px] text-[#D17A22]">
          HYPE →
        </span>
        {record.outputText}
      </div>
    </article>
  );
}
