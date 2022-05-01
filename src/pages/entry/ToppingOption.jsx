import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const ToppingOption = ({ name, imagePath,updateItemCount }) => {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      className="mb-5"
    >
      <Form.Check inline label={name} type={"checkbox"}>
        <div>
          <img
            src={`http://localhost:3030/${imagePath}`}
            alt={`${name} topping`}
            style={{width:"100px",height:"100px"}}
          />
        </div>
        <div>
          <Form.Check.Label htmlFor={`${name.replace(" ","-")}-checkbox`}>{name}
          <Form.Check.Input type={"checkbox"} id={`${name.replace(" ","-")}-checkbox`} onChange={(e)=>{
            const checked = e.target.checked;
            const itemcount = checked?1:0;
            updateItemCount(name,itemcount);
            console.log(e)}} />
          
          </Form.Check.Label>
        </div>
      </Form.Check>
    </Col>
  );
};
