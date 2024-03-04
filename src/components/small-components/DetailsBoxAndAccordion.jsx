import AccordionComponent from "./Accordion";
import { useTranslation } from "react-i18next";

function DetailsBoxAndAccordion() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="details-box">
        <p>{t("product_description")} </p>
        <div className="check">✓ {t("silk_description")}</div>
        <div className="check">✓ {t("sleep_benefits")}</div>
        <div className="check">✓ {t("eye_benefit")} </div>
        <div className="check">✓ {t("anti_aging_benefit")} </div>
      </div>

      <div className="accordion-container">
        <AccordionComponent />
      </div>
    </div>
  );
}

export default DetailsBoxAndAccordion;
