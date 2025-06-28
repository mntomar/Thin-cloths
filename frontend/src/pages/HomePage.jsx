import { products } from "../data/products";
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [ setProducts] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [API_BASE_URL]);

  return (
    <div>
      <HeroSection />

      <h2 className="text-xl font-bold p-4">Trending Products</h2>
      <ProductSlider />

      <h2 className="text-xl font-bold p-4">Popular Picks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;


