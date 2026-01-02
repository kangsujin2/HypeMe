interface HypeOutputProps {
  record: string | null;
}

export function HypeOutput({ record }: HypeOutputProps) {
  if (!record) return null;

  return (
    <section
      className="
        relative
        bg-[#FFF3DB]
        border-2 border-[#2A2A2A]
        rounded-xl
        px-6 py-5
        text-[#2A2A2A]
      "
    >
      {/* label */}
      <span
        className="
          absolute -top-3 left-4
          bg-[#D17A22]
          text-[#2A2A2A]
          text-[11px]
          font-mono
          px-2 py-0.5
          border border-[#2A2A2A]
          rounded-sm
        "
      >
        ⚠ HYPE SIGNAL
      </span>

      <p className="whitespace-pre-line text-[15px] leading-relaxed">
        {record}
      </p>
    </section>
  );
}
