import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";
const popover = (
  <Popover id="popover-terms-and-conditions">
    <Popover.Body>no icecream will actually be delivered</Popover.Body>
  </Popover>
);

const CheckBoxLabel = () => {
  return (
    <p>
      I agree to
      {
        <OverlayTrigger trigger={"hover"} placement="right" overlay={popover}>
          <span style={{ color: "blue", cursor: "pointer" }}>
            Terms and Conditions
          </span>
        </OverlayTrigger>
      }
    </p>
  );
};
export const SummaryForm = ({setOrderCode}) => {

 const [,,resetCount] = useOrderDetails();

  const [check, setChecked] = useState(false);

  const onSubmitOrder = async ()=>{
    
    try {
       const response =  await fetch('http://localhost:3030/order',{method:'POST',body:{'order':'IcecReam'}})
       const data = await response.json();
       const code = data.orderNumber;
       setOrderCode(code);
      console.log(code);
       
       resetCount();
     } catch (error) {
       //error
     }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={<CheckBoxLabel></CheckBoxLabel>}
          checked={check}
          onChange={(e) => {
            const checked = e.target.checked;
            setChecked(checked);
          }}
        />
      </Form.Group>
       
      <Button variant="primary" type="submit" onClick={async (e)=>{e.preventDefault(); await onSubmitOrder()}} disabled={!check}>
        Confirm order
      </Button>
    </Form>
  );
};
