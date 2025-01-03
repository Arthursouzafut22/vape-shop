import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";
import PageContext from "./context/ContextPage/ContextPage";
import Toast from "./pages/Product/Toast";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <PageContext>
          <GlobalStyles />
          <Toast />
          <Router />
        </PageContext>
      </ShoppingCartContext>
    </>
  );
}

export default App;
