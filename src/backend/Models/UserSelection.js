const mongoose = require("mongoose");

const userSelectionSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  date: { type: String, required: true },
  lunchSelected: { type: Boolean, default: false },
  snackSelected: { type: Boolean, default: false },
  isVegetarian: { type: Boolean, default: false },
  isNonVegetarian: { type: Boolean, default: false },
});

const UserSelection = mongoose.model("UserSelection", userSelectionSchema);

module.exports = UserSelection;
