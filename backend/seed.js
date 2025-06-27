const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    id: 1,
    name: "Midnight Muse",
    image: "/assets/01.jpg",
    hoverImage: "/assets/01-back.jpg",
    price: 1999,
    description: "Beautiful black bodycon dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 2,
    name: "Blush Bloom",
    image: "/assets/02.jpg",
    hoverImage: "/assets/02-back.jpg",
    price: 1799,
    description: "Light pink soft fabric dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 3,
    name: "Noir Nights",
    image: "/assets/03.jpg",
    hoverImage: "/assets/03-back.jpg",
    price: 2199,
    description: "Perfect for night parties.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 4,
    name: "Pastel Muse",
    image: "/assets/04.jpg",
    hoverImage: "/assets/04-back.jpg",
    price: 2999,
    description: "Elegant pastel shade dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 5,
    name: "Emerald Allure",
    image: "/assets/05.jpg",
    hoverImage: "/assets/05-back.jpg",
    price: 1899,
    description: "Dark green stunning look.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 6,
    name: "Sunset Glow",
    image: "/assets/06.jpg",
    hoverImage: "/assets/06-back.jpg",
    price: 2099,
    description: "Warm sunset colored dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 7,
    name: "Floral Charm",
    image: "/assets/07.jpg",
    hoverImage: "/assets/07-back.jpg",
    price: 1599,
    description: "Colorful floral printed top.",
    sizes: ["S", "M", "L"],
    category: "top",
  },
  {
    id: 8,
    name: "Urban Street",
    image: "/assets/08.jpg",
    hoverImage: "/assets/08-back.jpg",
    price: 1699,
    description: "Casual streetwear look.",
    sizes: ["M", "L", "XL"],
    category: "tshirt",
  },
  {
    id: 9,
    name: "Denim Classic",
    image: "/assets/09.jpg",
    hoverImage: "/assets/09-back.jpg",
    price: 2499,
    description: "Timeless denim jacket.",
    sizes: ["S", "M", "L", "XL"],
    category: "jacket",
  },
  // ✅ Add 4-6 more products if needed...
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected ✅");
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("✅ Products seeded");
    process.exit();
  })
  .catch((err) => {
    console.error("Mongo Error", err);
    process.exit(1);
  });
