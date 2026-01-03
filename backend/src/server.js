import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import TransactionRoutes from "./routes/TransactionRoutes.js";
import cookieParser from "cookie-parser";
import { apiLimiter } from "./middleware/rateLimiter.js";
import helmet from "helmet";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();


app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*", 
    credentials: true,
  })
);

app.use("/api", apiLimiter);

app.use("/api/auth", AuthRoutes);
app.use("/api/transactions", TransactionRoutes);

app.get("/", (req, res) => {
  res.send("DriveMoney backend is running 🚀");
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

