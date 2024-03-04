import ProvenStatics from "../5-provenStatics/ProvenStatics";
import "./middleBoxes.scss";
import { useTranslation } from "react-i18next";

function MiddleBoxes() {
  const { t } = useTranslation();

  return (
    <div className="middleBoxesContainer">
      <div className="first">
        <div className="right">
          <video
            data-video-autoplay=""
            style={{ objectPosition: "center center" }}
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/13271d9437634bc2bf0f7a1296f19a11.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="left">
          <h1>{t("unboxing_experience")}</h1>
          <p>{t("packaging_description")}</p>
        </div>
      </div>
      <div className="second">
        <div className="left">
          <h1>{t("special_description")}</h1>
          <p>{t("silver_ion_technology_info")}</p>
          <div className="icons">
            <div className="icon">
              <img
                src="//doreandrose.com/cdn/shop/files/wired-outline-1267-medical-insurance_200x200.gif?v=1688557871"
                alt="Not Found"
              />
              <span>{t("antibacterial_percentage")}</span>
            </div>
            <div className="icon">
              <img
                src="//doreandrose.com/cdn/shop/files/wired-outline-1644-air-quality_200x200.gif?v=1688557871"
                alt="Not Found"
              />
              <span>{t("breathable_fabric")}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <video
            data-video-autoplay=""
            style={{ objectPosition: "center center" }}
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/d7e0a2215e0e4c8ab7362ee6a1639e60.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="third">
        <div className="right">
          <img
            src="//doreandrose.com/cdn/shop/files/dorerose_3_Dark_Blue_Full-Face_Sleepmask_01_1_1100x.jpg?v=1692735050"
            alt="Not Found"
          />
        </div>
        <div className="left">
          <h1>{t("dermatologists_love")}</h1>
          <p>{t("recommendation")}</p>
          <span className="name">{t("doctor_name")}</span>
        </div>
      </div>

      <ProvenStatics />

      <div className="fourth">
        <div className="left">
          <h1>{t("deserved_sleep")}</h1>
          <p>{t("sleep_mask_info")}</p>
          <div className="icons">
            <div className="icon">
              <img
                src="//doreandrose.com/cdn/shop/files/Longer_REM_200x200.gif?v=1688569242"
                alt="Not Found"
              />
              <span>{t("longer_rem_sleep")}</span>
            </div>
            <div className="icon">
              <img
                src="//doreandrose.com/cdn/shop/files/Easier_falling_asleep_200x200.gif?v=1688569243"
                alt="Not Found"
              />
              <span>{t("easier_falling_asleep")}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="//doreandrose.com/cdn/shop/files/dorerose_3_Dark_Blue_Full-Face_Sleepmask_215_200x200_crop_center.jpg?v=1697053842" alt="Not Found" />
        </div>
      </div>
    </div>
  );
}

export default MiddleBoxes;
