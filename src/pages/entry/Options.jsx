import React from "react";
import { useEffect, useState } from "react";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";
import { Row } from "react-bootstrap";
import { AlertBanner } from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../context/OrderDetails";
export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails,updateItemCount] = useOrderDetails();

  useEffect(() => {
    //optionType is scoops or toppings

    fetch("http://localhost:3030/" + optionType)
      .then((response) => {
        if (response.status === 500) throw new Error("bad request");
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption; // null should be replaced by topping options
  const uppercaseOption = optionType.replace(/(\w)/, (_, p1) =>
    String.prototype.toUpperCase.call(p1)
  );
  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName,newItemCount)=>{updateItemCount(itemName,newItemCount,optionType)}}
    ></ItemComponent>
  ));

  return (<>
    <h2>{uppercaseOption}</h2>
    <h3>{pricePerItem[optionType]}$ each</h3>
    <p>{uppercaseOption} total: {orderDetails.totals[optionType]}</p>
    <Row>{!error ? OptionItems : <AlertBanner></AlertBanner>}</Row>
  </>)
};
