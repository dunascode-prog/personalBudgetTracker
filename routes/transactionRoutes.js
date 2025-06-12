const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransaction,
  deleteTransaction,
  getMonthlyStats,
} = require("../controllers/transactionController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getTransaction).post(protect, createTransaction);
router.route("/:id").delete(protect, deleteTransaction);

router.get("/monthly/stats", protect, getMonthlyStats);

module.exports = router;
