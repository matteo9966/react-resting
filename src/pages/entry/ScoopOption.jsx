import React from "react";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
export const ScoopOption = ({ name, imagePath, updateItemCount }) => {

  const handleChange = (e)=>{
       if(e.target.value<0)return
       updateItemCount(name,e.target.value);
  }
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />

      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10" }}
      >
        <Form.Label column xs={6} style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control type="number" defaultValue={0} min={0} max={10} onChange={handleChange}></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
};
