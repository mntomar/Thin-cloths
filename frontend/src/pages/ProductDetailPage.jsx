import { useParams } from "react-router-dom";
import { products } from "../data/products";
import RelatedProducts from "../components/RelatedProducts";
import { useState } from "react";

function ProductDetailPage({ cart, setCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <p className="p-4">Product not found</p>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    setCart([...cart, { ...product, selectedSize }]);
    alert("Product added to cart!");
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2">{product.description}</p>
          <p className="text-lg font-semibold mb-4">Rs. {product.price}</p>

          <h4 className="font-medium mb-2">Select Size:</h4>
          <div className="flex gap-2 mb-4">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      
      <h3 className="text-xl font-bold mt-8 mb-4">You may also like</h3>
      <RelatedProducts category={product.category} currentProductId={product.id} />
    </div>
  );
}

export default ProductDetailPage;
