import React from 'react'
import { useOrderDetails } from "../../context/OrderDetails";
export const GrandTotal = () => {
    const [orderDetails]= useOrderDetails();
    const total = orderDetails.totals.grandtotal
    // console.log({orderDetails})
  return (
    <div>
        <h2>Grand Total: $ {total}</h2>
    </div>
  )
}
