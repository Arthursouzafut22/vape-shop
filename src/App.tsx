import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";
import PageContext from "./context/ContextPage/ContextPage";
import FreteContext from "./context/ContextFrete/ContextFrete";
import Toast from "./pages/Product/Toast";

function App() {
  return (
    <>
      <FreteContext>
        <ShoppingCartContext>
          <PageContext>
            <GlobalStyles />
            <Toast />
            <Router />
          </PageContext>
        </ShoppingCartContext>
      </FreteContext>
    </>
  );
}

export default App;
