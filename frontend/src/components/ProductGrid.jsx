import { useEffect, useState } from "react";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://thin-cloths.vercel.app/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-2 rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded"
          />
          <h3 className="text-sm font-bold mt-2">{product.name}</h3>
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
