import { useState } from "react";
import { HypeInput } from "../components/HypeInput";
import { HypeOutput } from "../components/HypeOutput";
import { HypeHistory } from "../components/HypeHistory";
import type { HypeRecord } from "../types/HypeRecord";

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
      const outputText = data.reply ?? "You're doing great! Keep it up! 🚀";
      setOutputText(outputText);

      const newItem: HypeRecord = {
        id: crypto.randomUUID(),
        inputText,
        outputText,
        createdAt: Date.now(),
      };

      setRecords((prev) => [newItem, ...prev]);
      setInputText("");
    } catch (err) {
      console.error(err);
      setOutputText(
        "An error occurred while generating hype. But you're still awesome! 🚀"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-4 flex justify-center">
      <div className="w-full max-w-3xl space-y-4">
        <HypeInput
          inputText={inputText}
          isLoading={isLoading}
          onTextChange={setInputText}
          onSubmit={handleSubmit}
        />

        <HypeOutput record={outputText} />
        <HypeHistory records={records} />
      </div>
    </div>
  );
}
