const mongoose = require("mongoose");

const LunchSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  lunchItems: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Lunch", LunchSchema);
