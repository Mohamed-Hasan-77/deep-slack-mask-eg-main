// ========= MUI Components =========
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ========= Hooks =========
import { useState } from "react";

// Translations
import { useTranslation } from "react-i18next";

function QuestionAccordion() {
  const { t } = useTranslation();

  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  return (
    <div>
      {/* ======= First ======= */}
      <Accordion
        expanded={expandedAccordion === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          paddingBottom: ".7rem",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {t("improve_sleep_quality_question")}
        </AccordionSummary>
        <AccordionDetails
          sx={{ fontSize: ".9rem", textAlign: "start", lineHeight: "1.3rem" }}
        >
          {t("improve_sleep_quality_info")}
        </AccordionDetails>
      </Accordion>
      {/* ======= Second ======= */}
      <Accordion
        expanded={expandedAccordion === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          paddingBottom: ".7rem",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {t("promote_better_skin_question")}
        </AccordionSummary>
        <AccordionDetails
          sx={{ fontSize: ".9rem", textAlign: "start", lineHeight: "1.3rem" }}
        >
          {t("promote_better_skin_info")}
        </AccordionDetails>
      </Accordion>
      {/* ======= Third ======= */}
      <Accordion
        expanded={expandedAccordion === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          paddingBottom: ".7rem",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {t("suitable_for_all_skin_types_question")}
        </AccordionSummary>
        <AccordionDetails
          sx={{ fontSize: ".9rem", textAlign: "start", lineHeight: "1.3rem" }}
        >
          {t("suitable_for_all_skin_types_response")}
        </AccordionDetails>
      </Accordion>
      {/* ======= Fourth ======= */}
      <Accordion
        expanded={expandedAccordion === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          paddingBottom: ".7rem",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {t("product_testing_question")}
        </AccordionSummary>
        <AccordionDetails
          sx={{ fontSize: ".9rem", textAlign: "start", lineHeight: "1.3rem" }}
        >
          {t("product_testing_info")}
        </AccordionDetails>
      </Accordion>
      {/* ======= Fifth ======= */}
      <Accordion
        expanded={expandedAccordion === "panel5"}
        onChange={handleChange("panel5")}
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          paddingBottom: ".7rem",
          borderRadius: "0px !important",
          marginBottom: "1rem",
          ouline: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {t("cotton_vs_silk_question")}
        </AccordionSummary>
        <AccordionDetails
          sx={{ fontSize: ".9rem", textAlign: "start", lineHeight: "1.3rem" }}
        >
          {t("cotton_vs_silk_info")}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default QuestionAccordion;
