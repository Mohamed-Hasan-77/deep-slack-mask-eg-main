import "./refundPolicy.scss";
import { useTranslation } from "react-i18next";

function RefundPolicy() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="refund-policy-container">
        <h1>{t("RefundPolicyTitle")}</h1>
        <h2>{t("ReturnAndRefundPolicyTitle")}</h2>
        <p>
          {t("RefundPolicyDescription")}
        </p>
        <h3>{t("InsuredPriorityShippingTitle")}</h3>
        <ul>
          <li>
            {t("ExtendedWarrantyDescription")}
          </li>
          <li>
            {t("ReplacementProductDescription")}
          </li>
        </ul>
        <p>
          {t("SmoothProcessDescription")}
        </p>
        <p>
          {t("AppreciationMessage")}
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
