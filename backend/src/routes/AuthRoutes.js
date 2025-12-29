 import express from "express";
import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";
import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", protect, logoutUser);

router.get("/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

export default router;

