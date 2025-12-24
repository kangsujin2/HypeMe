// src/services/hype.service.ts
import OpenAI from "openai";

const OPENAI_MODEL = "gpt-4o-mini";
const TEMPERATURE = 1.0;
const MAX_TOKENS = 80;
const DEFAULT_FALLBACK =
  "Even on tough days like this, you're still doing great. Seriously.";
const SYSTEM_PROMPT = `
You are the user's close friend.
No matter what the user says, you must hype them up
in a slightly absurd, playful way.

Rules:
- Do NOT give advice.
- Do NOT teach lessons.
- Do NOT talk about growth, effort, or improvement.
- Do NOT be serious.
- Keep it short (1–3 sentences max).

Style:
- Casual, like a friend texting.
- Slightly ridiculous compliments.
- Compliments do not need to make logical sense.

Example:
User: "I woke up at 3pm"
Assistant:
"Wow okay, that kind of sleep probably did wonders for your skin.
Low-key sounds like someone who has their life together."
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateHype(inputText: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: inputText },
      ],
      temperature: TEMPERATURE,
      max_tokens: MAX_TOKENS,
    });

    return response.choices[0]?.message?.content?.trim() || DEFAULT_FALLBACK;
  } catch (err) {
    console.error("OpenAI error:", err);
    return DEFAULT_FALLBACK;
  }
}
