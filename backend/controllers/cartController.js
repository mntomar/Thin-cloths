const CartItem = require("../models/Cart");

// ✅ Add item to Cart
const addToCart = async (req, res) => {
  const { name, price } = req.body;
  const userId = req.userId;

  try {
    const newItem = new CartItem({
      userId,
      name,
      price,
    });
    await newItem.save();
    res.status(201).json({ message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

// ✅ Get User Cart
const getCart = async (req, res) => {
  try {
    const cartItems = await CartItem.find({ userId: req.userId });
    res.json({ items: cartItems });
  } catch (err) {
    res.status(500).json({ error: "Failed to load cart" });
  }
};

// ✅ Remove Item
const deleteCartItem = async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item" });
  }
};

module.exports = { addToCart, getCart, deleteCartItem };
