import express from "express";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";
import { body } from "express-validator";

import {
  addTransaction,
  getMyTransactions,
  getAllTransactions,
} from "../controllers/transactionController.js";
import {
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.post(
  "/",
  protect,
  [
    body("amount").isNumeric().withMessage("Amount must be a number"),
    body("source").notEmpty().withMessage("Source is required"),
  ],
  addTransaction
);

router.get("/me", protect, getMyTransactions);
router.get("/all", protect, adminOnly, getAllTransactions);
router.put("/:id", protect, updateTransaction);
router.delete("/:id", protect, deleteTransaction);

export default router;
