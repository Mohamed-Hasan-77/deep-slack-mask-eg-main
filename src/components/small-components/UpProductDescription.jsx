import { Box, Rating, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { smallImages } from "../../assets/data/smallImg";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const UpProductDescription = ({
  handleColorCategory,
  colorCategory,
  language,
}) => {
  const { t } = useTranslation();

  const [activeButtonId, setActiveButtonId] = useState("");

  useEffect(() => {
    setActiveButtonId(colorCategory.id);
  }, [colorCategory]);

  return (
    <div className="up">
      <h1>{t("product_name")}</h1>
      <p className="details">{t("review")} </p>
      <Box
        sx={{
          display: "flex",
          margin: "1.5rem 0px",
          direction: "ltr",
          justifyContent: language === "ar" ? "flex-end" : "flex-start",
        }}
      >
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Stack>
        <span
          style={{ marginLeft: "1rem", display: "flex", alignItems: "center" }}
        >
          4.7/5 {t("Reviews")}
        </span>
      </Box>
      <p
        className="price"
        style={{
          display: "flex",
          justifyContent: language === "ar" ? "flex-start" : "flex-start",
          alignItems: "center",
        }}
      >
        <span className="previous-price">{t("EGP")} 600.00</span>{" "}
        <span className="current-price">{t("EGP")} 350.00</span>{" "}
        <span className="sale">{t("Sale")}</span>
        <span className="color">
          {t("color")} | {t(colorCategory.name)}
        </span>
      </p>
      <div className="small-image">
        <div className="imgs-container">
          {smallImages.map((item) => (
            <button
              className={`img-div ${
                activeButtonId === item.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() => {
                handleColorCategory(item);
                setActiveButtonId(item.id);
              }}
            >
              <img src={item.src} alt={item.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpProductDescription;

UpProductDescription.propTypes = {
  handleColorCategory: PropTypes.func,
  colorCategory: PropTypes.object,
  language: PropTypes.string,
};
