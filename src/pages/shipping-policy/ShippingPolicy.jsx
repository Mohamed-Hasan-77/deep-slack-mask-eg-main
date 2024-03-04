import { useTranslation } from "react-i18next";
import "./shippingPolicy.scss";

function ShippingPolicy() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="shipping-policy-container">
        <h1>{t("ShippingPolicy")}</h1>
        <p>
          {t("ThankYouMessageShippingPolicy")}
        </p>

        <h2>{t("ProcessingTimeTitle")}</h2>
        <p>
          {t("ProcessingTimeDescription")}
        </p>

        <h2>{t("ShippingTimeTitle")}</h2>
        <p>
          {t("ShippingTimeDescription")}
        </p>

        <h2>{t("TrackingYourOrderTitle")}</h2>
        <p>
          {t("TrackingYourOrderDescription")}
        </p>

        <h2>{t("ShippingMethodsTitle")}</h2>
        <p>
          {t("ShippingMethodsDescription")}
        </p>

        <h2>{t("ShippingDelaysTitle")}</h2>
        <p>
          {t("ShippingDelaysDescription")}
        </p>

        <h2>{t("AddressAccuracyTitle")}</h2>
        <p>
          {t("AddressAccuracyDescription")}
        </p>

        <h2>{t("MissingOrDamagedPackagesTitle")}</h2>
        <p>
          {t("MissingOrDamagedPackagesDescription")}
        </p>

        <p className="closing">
          {t("HappyShoppingMessage")}
        </p>
        <p className="team-signature">{t("TeamSignature")}</p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
