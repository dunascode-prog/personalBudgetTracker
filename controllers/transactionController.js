const transactionModel = require("../models/transactionModels");

exports.createTransaction = async (req, res) => {
  const { type, category, amount, date } = req.body;
  const transaction = await transactionModel.create({
    user: req.user._id,
    type,
    category,
    amount,
    date,
  });
  res.status(200).json({ transaction });
};

exports.getTransaction = async (req, res) => {
  const user_id = req.user._id;
  const transactions = await transactionModel
    .find({ user: user_id })
    .sort({ date: -1 });

  if (!transactions) {
    return res.json({ Message: "No transactions Available for this User" });
  }
  res.status(200).json({ transactions });
};

exports.deleteTransaction = async (req, res) => {
  await transactionModel.findOneAndDelete({
    _id: req.params._id,
    user: req.user.id,
  });

  res.status(200).json({ id: req.params.id, Message: "Transaction Deleted" });
};

exports.getMonthlyStats = async (req, res) => {
  const userId = req.user._id;

  const pipeline = [
    { $match: { user: userId } },
    {
      $group: {
        _id: { month: { $month: "$date" }, year: { $year: "$date" } },
        totalExpense: {
          $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] },
        },
        totalIncome: {
          $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] },
        },
      },
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } },
  ];

  const stats = await transactionModel.aggregate(pipeline);
  res.status(200).json({
    MontlySpendings: stats,
  });
};
