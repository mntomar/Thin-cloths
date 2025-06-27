import { products } from "../data/products";
import HeroSection from "../components/HeroSection";
import ProductSlider from "../components/ProductSlider";
import ProductCard from "../components/ProductCard";

function HomePage() {
  return (
    <div>
      
      <HeroSection />
     
      
      <h2 className="text-xl font-bold p-4">Trending Products</h2>
      <ProductSlider />

      
      <h2 className="text-xl font-bold p-4">Popular Picks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
