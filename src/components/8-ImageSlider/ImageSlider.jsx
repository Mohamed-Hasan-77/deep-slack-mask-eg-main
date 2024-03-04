import "./imageSlider.scss";

import { useTranslation } from "react-i18next";
// ====== Swiper =======
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

// ========== import images ==========
import { imageSlider } from "../../assets/data/imgslider";

function ImageSlider() {
  const { t } = useTranslation();

  return (
    <div className="image-slider-container">
      <h1>#{t("preview_button")}</h1>
      <div className="img-slider" dir="ltr">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper-container"
          grabCursor={true} // Enable grab cursor
          freeMode={true} // Enable free mode for dragging
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            // when window width is <= 768px
            450: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
        >
          {imageSlider?.map((item) => (
            <SwiperSlide key={item.id}>
              <img className={"small-photo"} src={item.src} alt={item.name} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageSlider;
