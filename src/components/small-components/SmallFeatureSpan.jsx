import { useTranslation } from "react-i18next";

// React Icons
import { MdOutlinePayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
// Mui Icons
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function SmallFeatureSpan() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            display: "flex",
            fontSize: "18px",
            alignItems: "center",
            width: "50%",
            textIndent: "6px",
            marginBottom: "10px",
          }}
        >
          <MdOutlinePayment size={32} /> {t("payment_upon_delivery")}
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "18px",
            alignItems: "center",
            width: "50%",
            textIndent: "6px",
            paddingLeft: "2rem",
            marginBottom: "10px",
          }}
        >
          <FaShippingFast size={32} /> {t("Delivery")}
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "18px",
            alignItems: "center",
            width: "50%",
            textIndent: "6px",
            
          }}
        >
          <WorkspacePremiumIcon sx={{fontSize: "32px"}} /> {t("Guarantee")}
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "18px",
            alignItems: "center",
            width: "50%",
            textIndent: "6px",
            paddingLeft: "2rem",
            
          }}
        >
          <MdMiscellaneousServices size={32} />
          {t("Service")}
        </span>
      </div>
    </div>
  );
}

export default SmallFeatureSpan;
