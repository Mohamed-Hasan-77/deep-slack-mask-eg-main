import "./provenStatics.scss";

import { useTranslation } from "react-i18next";

function ProvenStatics() {
  const { t } = useTranslation();

  return (
    <div className="Proven-statics-container">
      <h1>{t("proven_statistics")}</h1>
      <div className="statistics-boxes">
        <div>
          <h1 className="percentage">95%</h1>
          <h2>{t("falling_asleep_easier_reported")}</h2>
          <span>{t("customer_panel_info")}</span>
        </div>
        <div>
          <h1 className="percentage">89%</h1>
          <h2>{t("increased_rem_sleep")}</h2>
          <span>{t("customer_panel_info")}</span>
        </div>
        <div>
          <h1 className="percentage">88%</h1>
          <h2>{t("reduction_in_under_eye_bags")}</h2>
          <span>{t("customer_panel_info")}</span>
        </div>
      </div>
    </div>
  );
}

export default ProvenStatics;
