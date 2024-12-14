const mongoose = require("mongoose");

const userLoginSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const UserLogin = mongoose.model("UserLogins", userLoginSchema);
module.exports = UserLogin;
