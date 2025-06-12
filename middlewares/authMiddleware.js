const jwt = require("jsonwebtoken");
const user = require("../models/userModels");

exports.protect = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) res.status(401).json({ Message: "No available Token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await user.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ Message: "Invalid Token" });
    console.log(error.message);
  }
};
