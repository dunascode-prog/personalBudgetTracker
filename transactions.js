const users = require("./users");
const transactions = [
  {
    user: users[0]._id,
    type: "income",
    category: "Salary",
    amount: 4500,
    date: new Date("2024-12-01"),
  },
  {
    user: users[0]._id,
    type: "expense",
    category: "Groceries",
    amount: 200,
    date: new Date("2024-12-02"),
  },
  {
    user: users[1]._id,
    type: "income",
    category: "Freelance",
    amount: 800,
    date: new Date("2024-11-15"),
  },
  {
    user: users[1]._id,
    type: "expense",
    category: "Transport",
    amount: 50,
    date: new Date("2024-11-16"),
  },
  {
    user: users[2]._id,
    type: "expense",
    category: "Rent",
    amount: 1200,
    date: new Date("2025-01-01"),
  },
  {
    user: users[3]._id,
    type: "income",
    category: "Bonus",
    amount: 1500,
    date: new Date("2025-01-10"),
  },
  {
    user: users[4]._id,
    type: "expense",
    category: "Health",
    amount: 300,
    date: new Date("2025-01-05"),
  },
  {
    user: users[5]._id,
    type: "income",
    category: "Stock",
    amount: 700,
    date: new Date("2024-12-12"),
  },
  {
    user: users[6]._id,
    type: "expense",
    category: "Utilities",
    amount: 120,
    date: new Date("2025-02-02"),
  },
  {
    user: users[7]._id,
    type: "income",
    category: "Business",
    amount: 3200,
    date: new Date("2024-11-20"),
  },
];

module.exports = transactions;
