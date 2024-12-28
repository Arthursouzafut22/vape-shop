import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/TheHeader";
import Home from "../pages/Home/TheHome";
import Atacado from "../pages/Atacado/TheAtacado";
import Contato from "../pages/Contato/TheContato";
import Liquidos from "../pages/Liquidos/Liquidos";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Rastreio from "../pages/Rastreio/Rastreio";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atacado" element={<Atacado />} />
        <Route path="/liquidos" element={<Liquidos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/rastreio" element={<Rastreio />} />
      </Routes>
    </BrowserRouter>
  );
};
