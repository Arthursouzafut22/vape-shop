import Header from "../Components/Header/TheHeader";
import Home from "../pages/Home/TheHome";
import Atacado from "../pages/Atacado/TheAtacado";
import Contato from "../pages/Contato/TheContato";
import Liquidos from "../pages/Liquidos/Liquidos";
import Cart from "../pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atacado" element={<Atacado />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/liquidos" element={<Liquidos />} />
      </Routes>
    </BrowserRouter>
  );
};
