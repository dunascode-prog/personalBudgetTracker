const express = require("express");
const morgan = require("morgan");
const app = express();
const authRoute = require("./routes/authRoutes");
const transactionRoute = require("./routes/transactionRoutes");
const cors = require("cors");
const helmet = require("helmet");

//define global middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(express.static(`${__dirname}/public`));

app.use("/api/auth", authRoute);
app.use("/api/transactions", transactionRoute);

if (process.env.NODE_ENV) {
  app.use(morgan("dev"));
}

module.exports = app;
