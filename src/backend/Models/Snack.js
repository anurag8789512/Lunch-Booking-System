const mongoose = require("mongoose");

const SnackSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  snacks: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Snack", SnackSchema);
