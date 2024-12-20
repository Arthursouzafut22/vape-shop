import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Routes/Routes";
import ShoppingCartContext from "./context/Cart/CartContext";
import Footer from "./Components/Footer/Footer";
import Toast from "./pages/Product/Toast";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <GlobalStyles />
        <Toast />
        <Router />
        <Footer />
      </ShoppingCartContext>
    </>
  );
}

export default App;
