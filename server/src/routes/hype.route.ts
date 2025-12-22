// src/routes/hype.route.ts
import { Router } from "express";
import { createHype } from "../controllers/hype.controller";

const router = Router();

router.post("/", createHype);

export default router;
