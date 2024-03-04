import "../2-productDetails/leftBigImage.scss";
// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ========== import images ==========
// small images
import { smallImages } from "../../assets/data/smallImg";

import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

// Style

function LeftBigImage({ colorCategory }) {
  const { t } = useTranslation();
  const [activeImg, setActiveImg] = useState("");

  const handleImageActive = (src) => {
    setActiveImg(src);
  };

  useEffect(() => {
    setActiveImg(colorCategory.src);
  }, [colorCategory]);

  const colorCategoryImages = colorCategory.images;

  console.log(colorCategoryImages);

  return (
    <div className="left">
      <div className="big-image">
        <img src={activeImg} alt="product image" />
      </div>
      <div className="small-image">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {colorCategoryImages?.map((item, index) => (
            <SwiperSlide
              onClick={() => {
                handleImageActive(item.src);
              }}
              key={item.id}
            >
              <img
                className={
                  item.src === activeImg ? "small-img active" : "small-img"
                }
                src={item.src}
                alt={smallImages.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="feature-box">
        <div>
          <span>✨</span>
          <div className="text">
            {t("smoother")},
            <br />
            {t("skin_benefit")}
          </div>
        </div>
        <div>
          <span>🌿</span>
          <div className="text">
            {t("hypoallergenic")}
            <br />
            {t("antibacterial")}
          </div>
        </div>
        <div>
          <span>💤</span>
          <div className="text">
            {t("deeper")},
            <br />
            {t("better_sleep")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBigImage;

LeftBigImage.propTypes = {
  colorCategory: PropTypes.object,
};
