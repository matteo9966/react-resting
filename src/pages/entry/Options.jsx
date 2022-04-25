import React from "react";
import { useEffect, useState } from "react";
import { ScoopOption } from "./ScoopOption";
import { Row } from "react-bootstrap";
export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //optionType is scoops or toppings

    fetch("http://localhost:3030/" + optionType)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null; // null should be replaced by topping options

  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    ></ItemComponent>
  ));

  return <Row>{OptionItems}</Row>;
};
