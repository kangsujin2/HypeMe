// src/services/hype.service.ts
const HYPE_MESSAGES = [
  "Honestly, just getting through the day like that takes strength.",
  "Not everyone could handle that — you did great.",
  "That might sound small, but it actually matters a lot.",
  "You're doing better than you think. Seriously.",
  "Even talking about this shows self-awareness. That's huge.",
];

export function generateHype(_: string): string {
  const index = Math.floor(Math.random() * HYPE_MESSAGES.length);
  return HYPE_MESSAGES[index];
}
