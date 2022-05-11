import "./App.css";
import Container from "react-bootstrap/Container";
import { OrderEntry } from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";
import { useState,useEffect } from "react";
import {SummaryForm} from './pages/summary/SummaryForm';
import { Confermation } from "./pages/confermation/Confermation";
const orderStates = { inProgress: 0, review: 1, complete: 2 };

function App() {
  const [orderCode, setOrderCode] = useState(null); // quando orderCode è qualche valore nuovo mostro la pagina di conferma
  const [orderStatus, setOrderStatus] = useState(orderStates.inProgress);
   
  useEffect(()=>{
    
    if(orderCode){
      // console.log('ordine completato!')
      setOrderStatus(orderStates.complete);

    }

  },[orderCode])


  useEffect(()=>{
    // console.log({orderStatus})
  },[orderStatus])

  return (
    <Container>
      <OrderDetailsProvider>
        {/* summary page and entry page need the provider */}
        
        
        {orderStatus===orderStates.inProgress && <OrderEntry goToSummary={()=>setOrderStatus(orderStates.review)}></OrderEntry>}
        {orderStatus===orderStates.review && <SummaryForm setOrderCode={setOrderCode} ></SummaryForm>}
        {orderStatus===orderStates.complete && <Confermation orderCode={orderCode} setNewOrder={()=>setOrderStatus(orderStates.inProgress)}></Confermation>}


      </OrderDetailsProvider>
      {/* confirmation page does not need a provider */}
    </Container>
  );
}

export default App;
