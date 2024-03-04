import "./reviews.scss";

// Translations
import { useTranslation } from "react-i18next";

// ======== Data ========
import { reviews } from "../../assets/data/reviews";

// ======== Swiper =========
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import PropTypes from "prop-types";

function Reviews({ language }) {
  const { t } = useTranslation();

  return (
    <div className="reviews-container">
      <h1>{t("why_people_love_mask")}</h1>
      <div className="slider">
        <div className="review-box" dir={language === "ar" ? "rtl" : "ltr"}>
          <span>{t("excellent")}</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0549/0117/8598/files/stars-4.5.svg?v=1662112912"
            alt="Stars"
          />
          <p>{t("based_on_reviews")}</p>
        </div>

        <Swiper
          dir="ltr"
          pagination={true}
          modules={[Pagination]}
          className="swiper-container"
          grabCursor={true} // Enable grab cursor
          freeMode={true} // Enable free mode for dragging
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews?.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="box">
                <img
                  src="https://cdn.shopify.com/s/files/1/0549/0117/8598/files/stars-4.5.svg?v=1662112912"
                  alt="Stars"
                />
                <span className="review-title">{item.title}</span>
                <span className="review-description">{item.description}</span>
                <div className="user-time">
                  <span className="user">{item.person}</span>
                  <span className="time">{item.time}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;

Reviews.propTypes = {
  language: PropTypes.string,
};
