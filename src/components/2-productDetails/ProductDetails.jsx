import "./productDetails.scss";
import { useTranslation } from "react-i18next";

// ======== Icons ========
import { FaMoneyCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
// ======== Swiper ========

// Import Swiper styles
import "swiper/css";

// ======== Hooks ========
import { useState, useEffect } from "react";

import { smallImages } from "../../assets/data/smallImg";

// ========== Small Components  ==========
import LeftBigImage from "../small-components/LeftBigImage";
import UpProductDescription from "../small-components/UpProductDescription";

// ========== PropTypes ==========
import PropTypes from "prop-types";

function ProductDetails({ language }) {
  const { t } = useTranslation();

  const [colorCategory, setColorCategory] = useState({});

  const handleColorCategory = (item) => {
    setColorCategory(item);
  };

  useEffect(() => {
    setColorCategory(smallImages[1]);
  }, []);

  return (
    <div className="product-details-container">
      <LeftBigImage colorCategory={colorCategory} />

      <div className="right">
        <UpProductDescription
          handleColorCategory={handleColorCategory}
          colorCategory={colorCategory}
          language={language}
        />
        <div className="down">
          <div className="box plane">
            <FaMoneyCheck size={24} />
            <span>{t("payment_option")}</span>
          </div>
          <div className="box time">
            <FaShippingFast size={24} />
            <span>{t("free_shipping")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

ProductDetails.propTypes = {
  language: PropTypes.string,
};
