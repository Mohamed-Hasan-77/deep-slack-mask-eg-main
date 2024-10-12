import "./footer.scss";
import { useTranslation } from "react-i18next";

// React Icons
import { MdEmail } from "react-icons/md";
import { FaClock, FaPhoneSquareAlt } from "react-icons/fa";

// Mui Icons
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import PropTypes from "prop-types";

// React Router Dom
import { Link } from "react-router-dom";

function Footer({ language }) {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="box">
          <div className="title">Smarketing LLC</div>
          {/* <div className="icons">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
          </div> */}
        </div>
        <div className="box">
          <Link to="/DeepSleepMaskEG/refund_policy">
            <div className="link" onClick={handleLinkClick}>
              <div className="con">
                {language === "en" ? (
                  <KeyboardDoubleArrowRightIcon className="i" />
                ) : (
                  <KeyboardDoubleArrowLeftIcon className="i" />
                )}{" "}
                {t("Refund Policy")}
              </div>
            </div>
          </Link>
          <Link to="/DeepSleepMaskEG/shipping_policy">
            <div className="link" onClick={handleLinkClick}>
              <div className="con">
                {language === "en" ? (
                  <KeyboardDoubleArrowRightIcon className="i" />
                ) : (
                  <KeyboardDoubleArrowLeftIcon className="i" />
                )}{" "}
                {t("Shipping Policy")}
              </div>
            </div>
          </Link>
          <Link to="/DeepSleepMaskEG/terms_of_service">
            <div className="link" onClick={handleLinkClick}>
              <div className="con">
                {language === "en" ? (
                  <KeyboardDoubleArrowRightIcon className="i" />
                ) : (
                  <KeyboardDoubleArrowLeftIcon className="i" />
                )}{" "}
                {t("Terms of Service")}
              </div>
            </div>
          </Link>
          <Link to="/DeepSleepMaskEG/privacy_policy">
            <div className="link" onClick={handleLinkClick}>
              <div className="con">
                {language === "en" ? (
                  <KeyboardDoubleArrowRightIcon className="i" />
                ) : (
                  <KeyboardDoubleArrowLeftIcon className="i" />
                )}{" "}
                {t("Privacy Policy")}
              </div>
            </div>
          </Link>
        </div>
        <div className="box">
          <div className="info">
            <MdEmail className="i" />
            info@smarketing.llc
          </div>
          <div className="info">
            <FaClock className="i" />
            {t("Technical support Hours")}
          </div>
          <div className="info">
            <FaPhoneSquareAlt className="i" />
            <div className="numbers">+20 01555501137</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  language: PropTypes.string,
};
