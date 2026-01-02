import React from "react";

interface HypeInputFormProps {
  inputText: string;
  isLoading: boolean;
  onTextChange: (value: string) => void;
  onSubmit: () => void;
}

const MAX_LENGTH = 300;

export function HypeInput({
  inputText,
  isLoading,
  onTextChange,
  onSubmit,
}: HypeInputFormProps) {
  const isDisabled = isLoading || !inputText.trim();
  const remainingLength = MAX_LENGTH - inputText.length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isDisabled) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* INPUT PANEL */}
      <div
        className="
          relative
          bg-[#FFF8ED]
          border-2 border-[#2A2A2A]
          rounded-xl
          px-6 py-5
        "
      >
        {/* label */}
        <p className="mb-2 text-[11px] font-mono text-[#6F7F3C]">
          WRITE SOMETHING
        </p>

        <textarea
          rows={4}
          maxLength={MAX_LENGTH}
          disabled={isLoading}
          value={inputText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder='e.g. "I woke up at noon and did absolutely nothing…"'
          className="
            w-full
            bg-transparent
            text-[15px]
            leading-relaxed
            text-[#2A2A2A]
            placeholder:text-[#A89F94]
            resize-none
            focus:outline-none
          "
        />

        {/* counter */}
        <span className="absolute bottom-3 right-4 text-[10px] font-mono text-[#A89F94]">
          {remainingLength}/{MAX_LENGTH}
        </span>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isDisabled}
        className="
          inline-flex
          items-center
          gap-2
          bg-[#D17A22]
          text-[#2A2A2A]
          font-mono
          px-6 py-3
          border-2 border-[#2A2A2A]
          rounded-md
          shadow-[3px_3px_0_#2A2A2A]
          disabled:opacity-50
          disabled:cursor-not-allowed
          active:translate-x-[2px]
          active:translate-y-[2px]
          transition
        "
      >
        {isLoading ? (
          <>
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#2A2A2A] border-t-transparent" />
            GENERATING
          </>
        ) : (
          <>HYPE_ME</>
        )}
      </button>
    </form>
  );
}
