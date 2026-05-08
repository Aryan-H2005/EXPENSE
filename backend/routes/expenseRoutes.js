const express = require("express");

const Expense = require("../models/Expense");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all expenses
router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Add expense
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, amount, category, type } = req.body;

    const expense = await Expense.create({
      userId: req.user.id,
      title,
      amount,
      category,
      type,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete expense
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.json({
      message: "Expense Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
