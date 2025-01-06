import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";
import PageContext from "./context/ContextPage/ContextPage";
import FreteContext from "./context/ContextFrete/ContextFrete";
import PaymentContext from "./context/ContextPayment/ContextPayment";
import Toast from "./pages/Product/Toast";

function App() {
  return (
    <>
      <PaymentContext>
        <FreteContext>
          <ShoppingCartContext>
            <PageContext>
              <GlobalStyles />
              <Toast />
              <Router />
            </PageContext>
          </ShoppingCartContext>
        </FreteContext>
      </PaymentContext>
    </>
  );
}

export default App;
