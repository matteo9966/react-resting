import { render } from "@testing-library/react";
import {OrderDetails} from '../../../context/OrderDetails';

export const mockedContextWith_ToppingsAndScoops = {
    toppings: new Map([['M&Ms',1],['Cherries',1]]),
    scoops: new Map([['Mint chips',1],['Vanilla',1]]),
    totals:{scoops:'$6.00',toppings:'$4.50',grandtotal:'$10.50'}
}
export const mockedContextWith_OnlyScoops = {
    toppings: new Map(),
    scoops: new Map([['Mint chips',1],['Vanilla',1]]),
    totals:{scoops:'$6.00',toppings:'$0.00',grandtotal:'$6.00'}
}
export const mockedContextWith_Nothing = {
    toppings: new Map(),
    scoops: new Map(),
    totals:{scoops:'$0.00',toppings:'$0.50',grandtotal:'$0.00'}
}

export const customRender = (ui,{providerValue})=>{
    return render(<OrderDetails.Provider value={[providerValue,()=>{},()=>{}]}>{ui}</OrderDetails.Provider>)
}