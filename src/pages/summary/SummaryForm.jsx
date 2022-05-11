import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
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
        <OverlayTrigger
          trigger={["hover", "click", "focus"]}
          placement="right"
          overlay={popover}
        >
          <span style={{ color: "blue", cursor: "pointer" }}>
            Terms and Conditions
          </span>
        </OverlayTrigger>
      }
    </p>
  );
};
export const SummaryForm = ({ setOrderCode=()=>{} }) => {
  const [orderDetails, , resetCount] = useOrderDetails();
  //orderDetails has
  /**
   *{
     scoops:Map,
     toppings:Map,
     totals:{scoops:string,
             toppings:string,
             grandtotal:string,
            }
     } 
   */

  const hasToppings = orderDetails.toppings.size > 0;

  const toppings = hasToppings ? (
    <Col sm={12} md={6}>
      <h2>Topping:</h2>
      <ListGroup variant="flush">
        {(() => {
          const listGroupItems = [];
          for (const [key, value] of orderDetails.toppings) {
            listGroupItems.push(key + ", qnt:" + value);
          }
          return listGroupItems.map((item) => (
            <ListGroup.Item>{item}</ListGroup.Item>
          ));
        })()}
        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
    </Col>
  ) : null;

  // console.log({ orderDetails });
  const [check, setChecked] = useState(false);

  const onSubmitOrder = async () => {
    try {
      const response = await fetch("http://localhost:3030/order", {
        method: "POST",
        body: { order: "IceCream" },
      });
      const data = await response.json();
      const code = data.orderNumber;
      setOrderCode(code);
      // console.log(code);

      resetCount();
    } catch (error) {
     
    }
  };

  return (
    <Container>
      <h1>Order Summary</h1>
      <Row>
        <Col sm={12} md={hasToppings ? 6 : 12}>
          <h2>Scoops:</h2>
          <ListGroup variant="flush">
            {(() => {
              const listGroupItems = [];
              for (const [key, value] of orderDetails.scoops) {
                listGroupItems.push(key + ", qnt:" + value);
              }
              return listGroupItems.map((item) => (
                <ListGroup.Item>{item}</ListGroup.Item>
              ));
            })()}
          </ListGroup>
        </Col>
        {toppings}
      </Row>
      <Row>
        <Form style={{ paddingTop: "3rem" }}>
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

          <Button
            variant="primary"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              await onSubmitOrder();
            }}
            disabled={!check}
          >
            Confirm order
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
