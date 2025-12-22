// src/index.ts
import express from "express";
import cors from "cors";
import hypeRouter from "./routes/hype.route";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/hype", hypeRouter);

app.listen(PORT, () => {
  console.log(`🔥 Hype server running on http://localhost:${PORT}`);
});
