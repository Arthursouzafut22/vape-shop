import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/TheHeader";
import Home from "../pages/Home/TheHome";
import Atacado from "../pages/Atacado/TheAtacado";
import Contato from "../pages/Contato/TheContato";
import Liquidos from "../pages/Liquidos/Liquidos";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Rastreio from "../pages/Rastreio/Rastreio";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import Payment from "../pages/Payment/Payment";
import Footer from "../Components/Footer/Footer";
import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const path = ["/payment", "/order"];
  const visilble = !path.includes(location.pathname);

  return (
    <>
      {visilble && <Header />}
      {children}
      {visilble && <Footer />}
    </>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atacado" element={<Atacado />} />
          <Route path="/liquidos" element={<Liquidos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rastreio" element={<Rastreio />} />
          <Route path="/order" element={<OrderDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
