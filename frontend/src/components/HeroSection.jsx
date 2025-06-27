import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const heroImages = [
  { img: "/assets/hero1.jpg", productId: 1 },
  { img: "/assets/hero2.jpg", productId: 2 },
  { img: "/assets/hero3.jpg", productId: 3 },
];

function HeroSection() {
  const navigate = useNavigate();

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      className="relative"
    >
      {heroImages.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(item.productId)}
          >
            <img
              src={item.img}
              alt={`Hero ${index + 1}`}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSection;
