import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import { useTranslation } from "react-i18next";

function AccordionComponent() {
  const { t } = useTranslation();
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };
  return (
    <div style={{ margin: "2rem 0px", width: "100%" }}>
      <Accordion
        expanded={expandedAccordion === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderTop: "1px solid black",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
          paddingBottom: "0px",
          paddingTop: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {t("details_and_care")}
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-up">
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("product_size")}:
              </span>{" "}
              {t("adjustable")} {t("size_70cm")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("treatment")}:
              </span>{" "}
              {t("anti_bacterial_treatment")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("fabric")}:
              </span>{" "}
              {t("silk_quality")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("ethical_certification")}:
              </span>{" "}
              {t("responsible_certification")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("animal_testing")}:
              </span>{" "}
              {t("no")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("artificial_chemicals")} :
              </span>{" "}
              {t("chemical_information")}
            </span>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("packaging")}:
              </span>{" "}
              {t("packaging_information")}
            </span>
            <span
              style={{ display: "block", fontSize: ".9rem", marginTop: "2rem" }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("washing_instructions")}:
              </span>{" "}
              {t("washing_instructionsDes")}
            </span>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedAccordion === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderTop: "1px solid black",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
          paddingBottom: "0px",
          paddingTop: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          {t("shipping_and_returns")}
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-up">
            <p
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: "1.5rem",
              }}
            >
              {t("free_shipping_offer")}
            </p>
            <span
              style={{
                display: "block",
                fontSize: ".9rem",
                marginBottom: ".4rem",
                lineHeight: "1.4rem",
              }}
            >
              <span className="title" style={{ fontWeight: "bold" }}>
                {t("shipping_times_message")}:
              </span>{" "}
              <br /> {t("standard_shipping_info")} <br />
              {t("express_shipping_info")}
            </span>
            <p style={{ marginTop: "1.5rem", fontSize: ".95rem" }}>
              {t("return_policy_info")}
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
