import React from "react";
import { Col } from "react-bootstrap";
export const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
};
