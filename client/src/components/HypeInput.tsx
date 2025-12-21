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
    if (!isDisabled) {
      onSubmit();
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="text-[11px] text-orange-500">
          You can write about your day like you’re texting a close friend ✍️
        </label>

        <div className="relative">
          <textarea
            rows={4}
            maxLength={MAX_LENGTH}
            className="w-full text-sm bg-white border border-orange-200 rounded-2xl px-3 py-2.5 pr-14 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 placeholder:text-orange-300"
            placeholder={`e.g. "I woke up at noon and did absolutely nothing all day…"`}
            value={inputText}
            onChange={(e) => onTextChange(e.target.value)}
            disabled={isLoading}
          />
          <span className="pointer-events-none absolute bottom-2.5 right-3 text-[10px] text-orange-300">
            {remainingLength} characters left
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full py-2.5 text-sm font-semibold rounded-2xl bg-orange-500 text-white shadow-md hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-1"
      >
        {isLoading ? (
          <>
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
            Generating hype…
          </>
        ) : (
          <>
            Get hyped <span>🍊</span>
          </>
        )}
      </button>
    </form>
  );
}
