import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["credit", "debit"],
      default: "credit",
    },

    source: {
      type: String,
      required: true, // ride, referral, bonus, etc.
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
