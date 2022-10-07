import { Pagination, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Gallery } from "./DragonGallery.styled";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const DragonGallery = ({ collection, name, onClick }) => (
  <Gallery>
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#000",
      }}
      cssMode={true}
      spaceBetween={10}
      loop={true}
      navigation={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[FreeMode, Navigation, Pagination]}
      className="mySwiper"
    >
      {collection.map((item) => {
        return (
          <SwiperSlide key={item} onClick={() => onClick(item)}>
            <img src={item} alt={name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </Gallery>
);

export default DragonGallery;
