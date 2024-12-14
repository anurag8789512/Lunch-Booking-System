const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  type: {
    type: String,
    required: true,
    enum: ["Lunch", "Snack"],
  },
  items: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
module.exports = MenuItem;
