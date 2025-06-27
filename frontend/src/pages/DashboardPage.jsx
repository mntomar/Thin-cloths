import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
export const products = [
  {
    id: 1,
    name: "Midnight Muse",
    image: "/assets/d1.jpg",
    hoverImage: "/assets/d1.jpg",
    price: 1999,
    description: "Beautiful black bodycon dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 2,
    name: "Blush Bloom",
    image: "/assets/d2.jpg",
    hoverImage: "/assets/d2.jpg",
    price: 1799,
    description: "Light pink soft fabric dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 3,
    name: "Noir Nights",
    image: "/assets/d3.jpg",
    hoverImage: "/assets/d3.jpg",
    price: 2199,
    description: "Perfect for night parties.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 4,
    name: "Pastel Muse",
    image: "/assets/d4.jpg",
    hoverImage: "/assets/d4.jpg",
    price: 2999,
    description: "Elegant pastel shade dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 5,
    name: "Emerald Allure",
    image: "/assets/d5.jpg",
    hoverImage: "/assets/d5.jpg",
    price: 1899,
    description: "Dark green stunning look.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 6,
    name: "Sunset Glow",
    image: "/assets/d6.jpg",
    hoverImage: "/assets/d6.jpg",
    price: 2099,
    description: "Warm sunset colored dress.",
    sizes: ["S", "M", "L", "XL"],
    category: "dress",
  },
  {
    id: 7,
    name: "Floral Charm",
    image: "/assets/d7.jpg",
    hoverImage: "/assets/d7.jpg",
    price: 1599,
    description: "Colorful floral printed top.",
    sizes: ["S", "M", "L"],
    category: "top",
  },
  {
    id: 8,
    name: "Urban Street",
    image: "/assets/d8.jpg",
    hoverImage: "/assets/d8.jpg",
    price: 1699,
    description: "Casual streetwear look.",
    sizes: ["M", "L", "XL"],
    category: "tshirt",
  },
  {
    id: 9,
    name: "Denim Classic",
    image: "/assets/d9.jpg",
    hoverImage: "/assets/d9.jpg",
    price: 2499,
    description: "Timeless denim jacket.",
    sizes: ["S", "M", "L", "XL"],
    category: "jacket",
  },
  {
    id: 10,
    name: "Golden Hour",
    image: "/assets/d10.jpg",
    hoverImage: "/assets/d10.jpg",
    price: 1899,
    description: "Bright golden casual wear.",
    sizes: ["S", "M", "L", "XL"],
    category: "top",
  },
  {
    id: 11,
    name: "Winter Frost",
    image: "/assets/d11.jpg",
    hoverImage: "/assets/d11.jpg",
    price: 2999,
    description: "Cozy winter hoodie.",
    sizes: ["M", "L", "XL"],
    category: "hoodie",
  },
  {
    id: 12,
    name: "Summer Vibe",
    image: "/assets/d12.jpg",
    hoverImage: "/assets/d12-black.jpg",
    price: 1399,
    description: "Light summer cotton t-shirt.",
    sizes: ["S", "M", "L"],
    category: "tshirt",
  },
];


function DashboardPage() {
  return (
    
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
       <ProductGrid />
    </div>
  );
}

export default DashboardPage;
