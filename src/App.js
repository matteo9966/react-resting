import "./App.css";
import Container from "react-bootstrap/Container";
import { OrderEntry } from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";
function App() {
  return (
    <Container>
      <OrderDetailsProvider>

        {/* summary page and entry page need the provider */}
        <OrderEntry></OrderEntry>
      </OrderDetailsProvider>
         {/* confirmation page does not need a provider */}
    </Container>
  );
}

export default App;
