import React from "react";
import Alert from "react-bootstrap/Alert";
export const AlertBanner = ({ msg, variant }) => {
  const message = msg || "An unexpected error ocurred, please try again later";
  const alertVariant = variant || "danger";
  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {message}
    </Alert>
  );
};
