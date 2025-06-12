const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "A User must have a password"],
      unique: true,
    },
  },
  { timestamps: true }
);

//performs a check if password is already in database if not then hash before putting it in database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
