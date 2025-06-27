import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="bg-white rounded shadow p-2 text-center hover:scale-105 transition cursor-pointer">
      <div className="relative">
       
        <img
          src={product.image}
          alt={product.name}
          className="h-58 w-full object-cover rounded transition-transform duration-300 hover:scale-110"
        />
        
        <img
          src={product.hoverImage}
          alt={product.name}
          className="w-full h-60 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-xs">Rs. {product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
