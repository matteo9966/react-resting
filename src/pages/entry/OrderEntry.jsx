import React from 'react'
import { Options } from './Options'
import { GrandTotal } from './GrandTotal';
import { Button } from 'react-bootstrap';
import { useOrderDetails } from "../../context/OrderDetails";
export const OrderEntry = ({goToSummary}) => {
  const [orderDetails] = useOrderDetails();
  const disableButton = (orderDetails.scoops.size === 0);
  return (
    <div>
        <Options optionType={'scoops'}></Options>
        <Options optionType={'toppings'}></Options>
        <GrandTotal></GrandTotal>
        <Button onClick={()=>{goToSummary()}} disabled={disableButton}>Ordina il tuo Sundae</Button>
    </div>
  )
}
