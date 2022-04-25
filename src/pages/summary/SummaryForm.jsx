import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger } from "react-bootstrap";
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
export const SummaryForm = () => {
  const [check, setChecked] = useState(false);
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

      <Button variant="primary" type="submit" disabled={!check}>
        Confirm order
      </Button>
    </Form>
  );
};
