import { useState } from "react";
import { HypeInput } from "../components/HypeInput";
import { HypeOutput } from "../components/HypeOutput";
import { HypeHistory } from "../components/HypeHistory";
import type { HypeRecord } from "../types/HypeRecord";
import { HypeTitle } from "../components/HypeTitle";

export function HypePage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState<HypeRecord[]>([]);

  const handleSubmit = async () => {
    if (!inputText.trim() || isLoading) return;

    setIsLoading(true);
    setOutputText(null);

    try {
      const response = await fetch("http://localhost:5000/api/hype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      const output = data.reply ?? "You're doing great.";
      setOutputText(output);

      const newItem: HypeRecord = {
        id: crypto.randomUUID(),
        inputText,
        outputText: output,
        createdAt: Date.now(),
      };

      setRecords((prev) => [newItem, ...prev]);
      setInputText("");
    } catch (err) {
      console.error(err);
      setOutputText("Something went wrong, but you're still solid.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3EFE6] flex justify-center py-20">
      {/* central panel */}
      <section className="w-full max-w-[820px] space-y-8">
        <HypeTitle />
        <HypeInput
          inputText={inputText}
          isLoading={isLoading}
          onTextChange={setInputText}
          onSubmit={handleSubmit}
        />

        <HypeOutput record={outputText} />

        <HypeHistory records={records} />
      </section>
    </main>
  );
}
