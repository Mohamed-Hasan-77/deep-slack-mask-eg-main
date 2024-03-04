// MUi Components
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import "./popup.scss";

// Icons
import { FaPhoneFlip } from "react-icons/fa6";

// Hooks
import { useState } from "react";
import { useTranslation } from "react-i18next";

// MUI Components
import CircularProgress from "@mui/material/CircularProgress";
import AlertComponent from "./AlertComponent";

import PropTypes from "prop-types";

function PopUp({ open, handleClose }) {


  // =========== Form ===========
  const [popUpFormData, setpopUpFormData] = useState({
    Mobile: "",
    Name: "Deep Sleep Mask EG",
  });
  const { t } = useTranslation();
  const [popUpShowSuccessAlert, setPopUpShowSuccessAlert] = useState(false);
  const [alertComponent, setAlertComponent] = useState(false);
  const [falseAlert, setFalseAlert] = useState(false);
  const [popUploading, setPopUploading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;

    // Basic validation for WhatsApp number (allow only numbers and limit to 10 digits)
    const isValidNumber = /^(\+?\d*)?$/.test(value);

    if (isValidNumber) {
      setpopUpFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function submit(e) {
    e.preventDefault();
    console.log("submitted");
    setPopUploading(true);

    // Validate the WhatsApp number before submission
    const isValidNumber = /^(\+?\d{0,14})?$/.test(popUpFormData.Mobile);

    if (!isValidNumber) {
      // Show error message or handle validation failure as needed
      setAlertComponent(true);
      setPopUploading(false);
      setTimeout(() => setAlertComponent(false), 3000);
      return;
    }

    // Fetch existing data from the sheet
    fetch("https://sheetdb.io/api/v1/u59jdcxvfppjp")
      .then((res) => res.json())
      .then((existingData) => {
        // Check if the Mobile number already exists
        const isNumberExists =
          existingData.filter((item) => item.Mobile === popUpFormData.Mobile)
            .length > 0;

        if (isNumberExists) {
          // Number already exists, handle accordingly (show error, etc.)
          setFalseAlert(true);
          setTimeout(() => setFalseAlert(false), 3000);
          setPopUploading(false);
          return;
        }

        // Continue with the submission since the number doesn't exist
        const popUpFormEle = document.querySelector(".popup-form");
        const popUpFormDataObj = new FormData(popUpFormEle);

        fetch("https://sheetdb.io/api/v1/u59jdcxvfppjp", {
          method: "POST",
          body: popUpFormDataObj,
        })
          .then((res) => res.text())
          .then((data) => {
            console.log(data);
            // Clear input fields after successful submission
            setpopUpFormData({
              Mobile: "",
              Name: "Deep Sleep Mask EG",
            });
            // Show success alert
            setPopUpShowSuccessAlert(true);
            setPopUploading(false);
            // Hide success alert after 3 seconds (adjust as needed)
            setTimeout(() => setPopUpShowSuccessAlert(false), 3000);
            handleClose();
          })
          .catch((error) => {
            console.log(error);
            setPopUploading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setPopUploading(false);
      });
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontWeight: "bold", fontSize: "1.3rem", marginTop: "2rem" }}
        >
          {t("FirstTimeDiscount")}
        </DialogTitle>
        <form className="popup-form" onSubmit={(e) => submit(e)}>
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <div className="icon">
              <FaPhoneFlip fontSize={20} />
            </div>
            <input
              type="tel"
              id="WhatsAppNumber"
              placeholder={t("WhatsAppNumber")}
              name="Mobile"
              value={popUpFormData.Mobile}
              onChange={(e) => handleInputChange(e)}
              autoComplete="off"
            />
          </div>
          <div className="form-group" style={{ marginBottom: "2rem", display: "none" }}>
            <div className="icon">
              <FaPhoneFlip fontSize={20} />
            </div>
            <input
              type="text"
              id="productName"
              name="Name"
              value={popUpFormData.Name}
              placeholder= "Product Name"
              onChange={(e) => handleInputChange(e)}
              autoComplete="off"
            />
          </div>
          <div className="submit-area">
            <button
              type="submit"
              className="submit-button"
              disabled={popUploading || popUpFormData.Mobile.trim() === ""}
            >
              {popUploading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                `${t("send")}`
              )}
            </button>
          </div>
        </form>
        {falseAlert && (
          <AlertComponent
            message={t("AlreadySentBefore")}
            type={"error"}
          />
        )}
        {alertComponent && (
          <AlertComponent message={t("NumberNotValid")} type={"error"} />
        )}
      </Dialog>
      {popUpShowSuccessAlert && (
        <AlertComponent
          message={t("WhatsAppNumberSubmitted")}
          type={"success"}
        />
      )}
    </div>
  );
}

export default PopUp;

PopUp.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
