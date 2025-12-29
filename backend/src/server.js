import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
import TransactionRoutes from "./routes/TransactionRoutes.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import helmet from "helmet";
import cors from "cors";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use(cookieParser());
app.use("/api/transactions", TransactionRoutes);
app.use("/api", apiLimiter);
app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://YOUR_FRONTEND_URL.vercel.app",
    ],
    credentials: true,
  })
);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
