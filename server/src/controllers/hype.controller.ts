import { Request, Response } from "express";
import { generateHype } from "../services/hype.service";

export async function createHype(req: Request, res: Response) {
  try {
    const { text } = req.body;

    if (typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ error: "Invalid text input" });
    }

    const reply = await generateHype(text);

    return res.status(200).json({
      reply,
    });
  } catch (err) {
    console.error("Controller error:", err);
    return res.status(500).json({
      error: "Failed to generate hype message",
    });
  }
}
