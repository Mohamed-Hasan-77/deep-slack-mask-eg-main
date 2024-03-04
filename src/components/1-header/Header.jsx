import { useState } from "react";
// the hook
import { useTranslation } from "react-i18next";
import "./header.scss";
// // Icons
// import { IoMdClose } from "react-icons/io";
// import { IoMenu } from "react-icons/io5";

// Importing PropTypes
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ setLanguage, changeLanguage, i18n }) {
  // const [clicked, setClicked] = useState(false);
  // const { t } = useTranslation();
  // const handleMenuClick = () => {
  //   setClicked(!clicked);
  // };
  const handleLinkClickHeader = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav>
        {/* <div id="mobile">
          <div id="bar" onClick={handleMenuClick}>
            {clicked ? (
              <IoMdClose size={32} id="close-icon" />
            ) : (
              <IoMenu size={32} id="menu-icon" />
            )}
          </div>
        </div> */}
        {/* <a className="logo" href="index.html">
          <span>Deep Sleep Mask</span>
        </a> */}
        <div className="header-left-side">
          {/* <div className="navbar">
            <ul className={clicked ? "navbar active" : "navbar"} id="navbar">
              <li>
                <a href="#">{t("Home")}</a>
              </li>
              <li>
                <a href="index.html" className="active">
                  {t("Bestsellers")}
                </a>
              </li>
              <li>
                <a href="#">{t("Compare")}</a>
              </li>
              <li>
                <a href="#">{t("About")}</a>
              </li>
              <li>
                <a href="#">{t("New year Sale")}</a>
              </li>
              <li>
                <a href="#">{t("Contact")}</a>
              </li>
            </ul>
          </div> */}
          <Link to="/DeepSleepMaskEG" onClick={handleLinkClickHeader}>
            <a className="logo" href="#">
              <span>Deep Sleep Mask</span>
            </a>
          </Link>
        </div>
        <div className="language-btn">
          {i18n.language === "en" && (
            <button
              onClick={() => {
                changeLanguage("ar");
                setLanguage("ar");
              }}
            >
              عربي
            </button>
          )}
          {i18n.language === "ar" && (
            <button
              onClick={() => {
                changeLanguage("en");
                setLanguage("en");
              }}
            >
              EN
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;

Header.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};
