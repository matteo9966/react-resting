import "./App.css";
import Container from "react-bootstrap/Container";
import { OrderEntry } from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";
import { GrandTotal } from "./pages/entry/GrandTotal";
function App() {
  return (
    <Container>
      <OrderDetailsProvider>

        {/* summary page and entry page need the provider */}
        <OrderEntry></OrderEntry>
        <GrandTotal></GrandTotal>
      </OrderDetailsProvider>
         {/* confirmation page does not need a provider */}
    </Container>
  );
}

export default App;
