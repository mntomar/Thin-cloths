const express = require("express");
const connectDB = require("../config/db");
const dotenv = require("dotenv");
const cors = require("cors");

// Load .env variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

app.use(cors({
  origin: 'https://visionary-madeleine-85f34b.netlify.app',
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("../routes/authRoutes"));
app.use("/api/products", require("../routes/productRoutes"));
app.use("/api/cart", require("../routes/cartRoutes"));

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// ✅ Export for Vercel
module.exports = app;
