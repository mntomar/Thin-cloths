const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const cors = require("cors");

// Load .env
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: false,
}));
app.use(express.json());

// API Routes
app.use("/api/auth", require("../routes/authRoutes"));
app.use("/api/products", require("../routes/productRoutes"));
app.use("/api/cart", require("../routes/cartRoutes"));

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API running on Vercel");
});

// Export for Vercel
module.exports.handler = serverless(app);
