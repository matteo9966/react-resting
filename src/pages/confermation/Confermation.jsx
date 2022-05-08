import React from "react";
import styles from "./confirmation.module.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

//questa pagina viene mostrata solo quando ho ricevuto il codice.

export const Confermation = ({setNewOrder,orderCode}) => {
    console.log('confermation code',orderCode);
  return (
    <div className={styles["confirmation__body"]}>
      <Stack gap={2}>
        <h1>Thank you</h1>
        <h2>Your order number is: {orderCode}</h2>
        <p>Up to your terms and conditions nothing will happen now</p>
        <Button onClick={setNewOrder}>Create new order</Button>
      </Stack>
    </div>
  );
};
