import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { products } from "../data/products";
import { Link } from "react-router-dom";

function ProductSlider() {
  return (
    <div className="p-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="bg-white rounded shadow p-2 hover:scale-105 transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded"
                />
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-xs">Rs. {product.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
