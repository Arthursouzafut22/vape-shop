import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <GlobalStyles />
        <Router />
        <Footer/>
      </ShoppingCartContext>
    </>
  );
}

export default App;
