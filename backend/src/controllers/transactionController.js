import Transaction from "../models/Transaction.js";
import { validationResult } from "express-validator";

/* =========================
   ADD TRANSACTION (USER)
========================= */
export const addTransaction = async (req, res) => {
  // 🔐 Phase 8: Input validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Invalid input data",
      errors: errors.array(),
    });
  }

  try {
    const { amount, source, description } = req.body;

    const transaction = await Transaction.create({
      user: req.user.id,
      amount,
      source,
      description,
    });

    res.status(201).json({
      message: "Transaction added successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add transaction",
      error: error.message,
    });
  }
};

/* =========================
   GET MY TRANSACTIONS (USER)
========================= */
export const getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch transactions",
      error: error.message,
    });
  }
};

/* =========================
   GET ALL TRANSACTIONS (ADMIN)
========================= */
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("user", "email role")
      .sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch all transactions",
      error: error.message,
    });
  }
}; // ✅ THIS WAS MISSING

/* =========================
   UPDATE TRANSACTION (USER)
========================= */
export const updateTransaction = async (req, res) => {
  try {
    const { amount, source, description } = req.body;

    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    transaction.amount = amount ?? transaction.amount;
    transaction.source = source ?? transaction.source;
    transaction.description =
      description ?? transaction.description;

    await transaction.save();

    res.json({
      message: "Transaction updated successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE TRANSACTION (USER)
========================= */
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



