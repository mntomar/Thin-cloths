const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: String,
  price: Number,
});

module.exports = mongoose.model("CartItem", cartItemSchema);
