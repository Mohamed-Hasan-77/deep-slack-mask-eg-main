import { useTranslation } from "react-i18next";

import {
  ImageSlider,
  Form,
  MiddleBoxes,
  ProductDetails,
  QuestionsAndAnswers,
  Reviews,
} from "../../components";

// Hooks
import { useEffect, useRef, useState } from "react";
import DetailsBoxAndAccordion from "../../components/small-components/DetailsBoxAndAccordion";
import SmallFeatureSpan from "../../components/small-components/SmallFeatureSpan";

import PropTypes from "prop-types";

function LandingPage({language}) {
  const { t } = useTranslation();

  // ===================================== Leave =========================================

  const sectionRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 300px
      if (window.scrollY > 2200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ==============================================================================

  // ==================================== Leave ==========================================
  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // ==============================================================================

  return (
    <div>
      <div className="app-container">
        <ProductDetails language={language} />
        <div id="form-section" ref={sectionRef}>
          <Form language={language} />
        </div>
        <SmallFeatureSpan />
        <DetailsBoxAndAccordion />
        <Reviews language={language} />
        <MiddleBoxes />
        <QuestionsAndAnswers />
      </div>
      <ImageSlider />
      {showScrollButton && (
        <a href="#form-section" id="scrollButton" onClick={scrollToTop}>
          {t("send_button")}
        </a>
      )}
    </div>
  );
}

export default LandingPage;


LandingPage.propTypes = {
  language: PropTypes.string,
};