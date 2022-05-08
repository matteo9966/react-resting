import React from 'react'
import { Options } from './Options'
import { GrandTotal } from './GrandTotal';
import { Button } from 'react-bootstrap';
export const OrderEntry = ({goToSummary}) => {
  return (
    <div>
        <Options optionType={'scoops'}></Options>
        <Options optionType={'toppings'}></Options>
        <GrandTotal></GrandTotal>
        <Button onClick={()=>{goToSummary()}}>Ordina il tuo Sundae</Button>
    </div>
  )
}
