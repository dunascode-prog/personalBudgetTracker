const user = require("../models/userModels");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1hr" });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await user.findOne({ email });

  if (userExists)
    return res
      .status(400)
      .json({ status: "invalid", message: "User Already Exists" });

  const User = await user.create({ name, email, password });
  const token = generateToken(User._id);

  res.status(200).json({ user: { id: User._id, name: User.name }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const Userlogin = await user.findOne({ email }).select("+password");

  if (!Userlogin || !(await Userlogin.matchPassword(password))) {
    res.status(201).json({ Message: "Invalid Credentials" });
  }
  const token = generateToken(Userlogin._id);
  res
    .status(200)
    .json({ user: { id: Userlogin._id, name: Userlogin.name }, token });
};
