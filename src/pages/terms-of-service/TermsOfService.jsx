import { useTranslation } from "react-i18next";

import "./termsOfService.scss";

function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="terms-policy-container">
        <h1>{t("Terms of Service Title")}</h1>
        <p>{t("Operated By")}</p>
        <p>{t("Engagement")}</p>
        <p>{t("Reading Terms")}</p>
        <p>{t("New Features")}</p>
        <p>{t("Shopify Hosting")}</p>

        <h2>{t("SECTION_1_TITLE")}</h2>
        <p>{t("SECTION_1_P1")}</p>
        <p>{t("SECTION_1_P2")}</p>
        <p>{t("SECTION_1_P3")}</p>
        <p>{t("SECTION_1_P4")}</p>

        <h2>{t("SECTION_2_TITLE")}</h2>
        <p>{t("SECTION_2_P1")}</p>
        <p>{t("SECTION_2_P2")}</p>
        <p>{t("SECTION_2_P3")}</p>
        <p>{t("SECTION_2_P4")}</p>
        <p>{t("SECTION_2_P5")}</p>

        <h2>{t("SECTION_3_TITLE")}</h2>
        <p>{t("SECTION_3_P1")}</p>
        <p>{t("SECTION_3_P2")}</p>

        <h2>{t("Section4Title")}</h2>
        <p>{t("Section4Content")}</p>

        <h2>{t("Section5Title")}</h2>
        <p>{t("Section5Content1")}</p>
        <p>{t("Section5Content2")}</p>
        <p>{t("Section5Content3")}</p>

        <h2>{t("Section6Title")}</h2>
        <p>{t("Section6Content")}</p>
        <p>{t("AccountInformationAgreement")}</p>
        <p>{t("RefundPolicyNote")}</p>

        <h2>{t("Section7Title")}</h2>
        <p>{t("Section7Content1")}</p>
        <p>{t("Section7Content2")}</p>
        <p>{t("Section7Content3")}</p>
        <p>{t("Section7Content4")}</p>

        <h2>{t("Section8Title")}</h2>
        <p>{t("Section8Content1")}</p>
        <p>{t("Section8Content2")}</p>
        <p>{t("Section8Content3")}</p>

        <h2>{t("Section9Title")}</h2>
        <p>{t("Section9Content1")}</p>
        <p>{t("Section9Content2")}</p>
        <p>{t("Section9Content3")}</p>
        <p>{t("Section9Content4")}</p>
        <p>{t("Section9Content5")}</p>

        <h2>{t("Section10Title")}</h2>
        <p>{t("Section10Content")}</p>

        <h2>{t("SECTION_11_TITLE")}</h2>
        <p>{t("SECTION_11_P1")}</p>
        <p>{t("SECTION_11_P2")}</p>

        <h2>{t("SECTION_12_TITLE")}</h2>
        <p>{t("SECTION_12_P1")}</p>
        <p>{t("SECTION_12_P2")}</p>

        <h2>{t("SECTION_13_TITLE")}</h2>
        <p>{t("SECTION_13_P1")}</p>
        <p>{t("SECTION_13_P2")}</p>
        <p>{t("SECTION_13_P3")}</p>

        <h2>{t("SECTION_14_TITLE")}</h2>
        <p>{t("SECTION_14_P1")}</p>

        <h2>{t("SECTION_15_TITLE")}</h2>
        <p>{t("SECTION_15_P1")}</p>

        <h2>{t("SECTION_16_TITLE")}</h2>
        <p>
          {t("SECTION_16_P1")}
        </p>
        <p>
          {t("SECTION_16_P2")}
        </p>
        <p>
          {t("SECTION_16_P3")}
        </p>

        <h2>{t("SECTION_17_TITLE")}</h2>
        <p>
          {t("SECTION_17_P1")}
        </p>
        <p>
          {t("SECTION_17_P2")}
        </p>

        <h2>{t("SECTION_18_TITLE")}</h2>
        <p>
          {t("SECTION_18_P1")}
        </p>

        <h2>{t("SECTION_19_TITLE")}</h2>
        <p>
          {t("SECTION_19_P1")}
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
