import React from "react";
import { useEffect, useState } from "react";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";
import { Row } from "react-bootstrap";
import { AlertBanner } from "../common/AlertBanner";
export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    //optionType is scoops or toppings

    fetch("http://localhost:3030/" + optionType)
      .then((response) => {
        if(response.status===500) throw new Error('bad request')
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption; // null should be replaced by topping options

  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    ></ItemComponent>
  ));

  return <Row>
    
    {(!error)?OptionItems:<AlertBanner></AlertBanner>}
    </Row>;
};
