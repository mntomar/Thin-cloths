import { products } from "../data/products";
import { Link } from "react-router-dom";

function RelatedProducts({ category, currentProductId }) {
  const related = products.filter(
    (p) => p.category === category && p.id !== currentProductId
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {related.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="border rounded shadow p-2">
          <img src={product.image} alt={product.name} className="h-32 w-full object-cover rounded" />
          <h4 className="text-sm mt-2 font-medium">{product.name}</h4>
          <p className="text-xs">Rs. {product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default RelatedProducts;