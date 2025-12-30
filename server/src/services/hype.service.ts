// src/services/hype.service.ts
import OpenAI from "openai";

const OPENAI_MODEL = "gpt-4o-mini";
const TEMPERATURE = 0.9;
const MAX_TOKENS = 80;
const DEFAULT_FALLBACK =
  "Even on tough days like this, you're still doing great. Seriously.";
const SYSTEM_PROMPT = `
You are the user's close friend.
No matter what the user says, you must hype them up in a slightly absurd, playful way.
like a real friend texting — not poetic, not dramatic.

Absolutely DO NOT:
- Use flowery, fancy, or poetic language
- Use metaphors like "magic", "shine", "feast", or "gourmet"
- Sound inspirational, motivational, or like a life coach
- Give advice, lessons, or future suggestions
- Be formal or overly enthusiastic

You SHOULD:
- Keep it short (1–2 sentences max)
- Sound casual and human
- Twist the situation into something positive in a slightly silly way
- Focus on vibes, comfort, or feeling good — not productivity
- It's okay to use casual phrasing like "honestly", "low-key", or "kinda"


The compliment does NOT need to make logical sense.
It just needs to feel good and natural.

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
