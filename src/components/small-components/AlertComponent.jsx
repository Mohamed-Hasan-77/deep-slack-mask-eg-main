import Alert from "@mui/material/Alert";

import PropTypes from "prop-types";

function AlertComponent({ type, message }) {
  return (
    <div style={{zIndex: "2000000000000 !important"}}>
      <Alert className="alert" severity={type}>
        {message}
      </Alert>
    </div>
  );
}

export default AlertComponent;

AlertComponent.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};
