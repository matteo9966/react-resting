import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export const OrderDetails = createContext();

//custom hook
//check if inside a provider

export function useOrderDetails() {
  //restituisce solo il context chiamandolo da dentro un figlio del provider di questo context
  const context = useContext(OrderDetails);

  if (!context) {
    //no context if outside a provider
    throw new Error(
      "useOrderDetails must be called inside a OrderDetailsProvider"
    );
  }

  return context;
}

/**
 *
 * @param {string} optionType optionType è una stringa che definisce il tipo di opzione scelto (cioccolato / vaniglia)
 * @param {*} optionCounts ogni opzione oltre al nome ha anche un contatore
 * @returns  la somma di tutti i conteggi delle opzioni moltiplicato per il rispettivo prezzo
 */
function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
}

export function OrderDetailsProvider(props) {
  const [optionCount, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal("scoops", optionCount);
    const toppingSubtotal = calculateSubtotal("toppings", optionCount);
    const grandtotal = scoopsSubtotal + toppingSubtotal;
    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingSubtotal),
      grandtotal: formatCurrency(grandtotal),
    });
  }, [optionCount]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCount };

      //update optionCount with new value

      const optionCountMap = newOptionCounts[optionType];
      optionCountMap.set(itemName, +newItemCount);
      setOptionCounts(newOptionCounts);
    }

    function resetCount(){
      const zeroCurrency = formatCurrency(0);
      setTotals({
        scoops: zeroCurrency,
        toppings: zeroCurrency,
        grandTotal: zeroCurrency,
      })
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      })

    }
    //getter:object containing options count for toppings
    //contains subtotals and totals
    //setter: updateOptionsCount
    return [
      {
        ...optionCount,
        totals,
      },
      updateItemCount,
      resetCount
    ];
  }, [optionCount, totals]);
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  );
}
