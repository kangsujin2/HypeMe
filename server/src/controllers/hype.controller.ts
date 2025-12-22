// src/controllers/hype.controller.ts
import { Request, Response } from "express";
import { generateHype } from "../services/hype.service";

export function createHype(req: Request, res: Response) {
  const { text } = req.body;

  if (typeof text !== "string" || !text.trim()) {
    return res.status(400).json({
      error: "Invalid text input",
    });
  }

  const reply = generateHype(text);

  return res.status(200).json({ reply });
}
