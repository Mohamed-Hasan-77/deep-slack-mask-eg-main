import { useTranslation } from "react-i18next";

import "./privacyPolicy.scss";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="privacy-policy-container">
        <h1>{t("Privacy_Policy_Title")}</h1>
        <p>{t("Privacy_Policy_P1")}</p>
        <p>{t("Privacy_Policy_P2")}</p>

        <h2>{t("Privacy_Policy_Changes_Title")}</h2>
        <p>{t("Privacy_Policy_Changes_P1")}</p>

        <h2>{t("COLLECTION_TITLE")}</h2>
        <p>{t("COLLECTION_P1")}</p>
        <p>{t("COLLECTION_P2")}</p>

        <h3>{t("COLLECTION_SUBTITLE")}</h3>
        <p>{t("COLLECTION_P3")}</p>

        <h2>{t("Info_Collection_Title")}</h2>
        <p>{t("Info_Collection_Intro")}</p>
        <ul>
          <li>{t("Contact_Details")}</li>
          <li>{t("Order_Information")}</li>
          <li>{t("Account_Information")}</li>
          <li>{t("Shopping_Information")}</li>
          <li>{t("Customer_Support_Information")}</li>
        </ul>
        <p>{t("Info_Collection_Features_Note")}</p>

        <h3>{t("Cookies_Collection_Title")}</h3>
        <p>{t("Cookies_Collection_Description")}</p>

        <h2>{t("Third_Party_Info_Title")}</h2>
        <p>{t("Third_Party_Info_Intro")}</p>
        <ul>
          <li>{t("Support_Companies")}</li>
          <li>{t("Payment_Processors")}</li>
          <li>{t("Interaction_Tracking")}</li>
        </ul>
        <p>{t("Third_Party_Info_Compliance")}</p>

        <h2>{t("Use_Personal_Info_Title")}</h2>
        <ul>
          <li>{t("Use_Personal_Info_P1")}</li>
          <li>{t("Use_Personal_Info_P2")}</li>
          <li>{t("Use_Personal_Info_P3")}</li>
        </ul>

        <h2>{t("Disclosure_Title")}</h2>
        <p>{t("Disclosure_Intro")}</p>
        <ul>
          <li>{t("Vendors_Services")}</li>
          <li>{t("Business_Marketing_Partners")}</li>
          <li>{t("User_Consent")}</li>
          <li>{t("Affiliates_Corporate_Group")}</li>
          <li>{t("Business_Transactions")}</li>
        </ul>

        <h2>{t("User_Generated_Content_Title")}</h2>
        <p>{t("User_Generated_Content_P1")}</p>
        <p>{t("User_Generated_Content_P2")}</p>

        <h2>{t("Third_Party_Websites_Links_Title")}</h2>
        <p>{t("Third_Party_Websites_Links_P1")}</p>

        <h2>{t("Security_Retention_Title")}</h2>
        <p>{t("Security_Retention_P1")}</p>
        <p>{t("Security_Retention_P2")}</p>

        <h2>{t("Rights_And_Choices_Title")}</h2>
        <p>{t("Rights_And_Choices_Intro")}</p>
        <ul>
          <li>{t("Right_To_Access_Know")}</li>
          <li>{t("Right_To_Delete")}</li>
          <li>{t("Right_To_Correct")}</li>
          <li>{t("Right_To_Portability")}</li>
          <li>{t("Right_To_Opt_Out_Of_Sale_Or_Sharing")}</li>
        </ul>

        <h2>{t("Rights_And_Processing_Title")}</h2>
        <ul>
          <li>{t("Restriction_Of_Processing")}</li>
          <li>{t("Withdrawal_Of_Consent")}</li>
          <li>{t("Appeal_Process")}</li>
          <li>{t("Managing_Comm_Preferences")}</li>
        </ul>
        <p>{t("Exercise_Rights_Information")}</p>
        <p>{t("Non_Discrimination_Statement")}</p>
        <p>{t("Designation_Of_Agent")}</p>
        <p>{t("Timely_Response_Assurance")}</p>

        <h2>{t("Complaints_Title")}</h2>
        <p>
          {t("Complaints_Content")}
        </p>

        <h2>{t("International_Users_Title")}</h2>
        <p>
          {t("International_Users_Content")}
        </p>


        <h2>{t("Contact_Title")}</h2>
        <p>
          {t("Contact_Content")}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
