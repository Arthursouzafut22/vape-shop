import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <GlobalStyles />
        <Router />
      </ShoppingCartContext>
    </>
  );
}

export default App;
