import * as S from "./Styles";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiLiquidSoap } from "react-icons/gi";
import { GrProductHunt } from "react-icons/gr";

export type PropsNav = {
  mobile: boolean;
  activeMenu?: boolean;
};

const NavComponent = ({ mobile, activeMenu }: PropsNav) => {
  return (
    <S.WrapperNav mobile={mobile} activeMenu={activeMenu}>
      <NavLink to="/" end>
        <FaHome style={{ fontSize: "17px" }} />
        Inicio
      </NavLink>
      <NavLink to="/atacado">
        <RiShoppingBag4Fill style={{ fontSize: "17px" }} />
        Atacado
      </NavLink>
      <NavLink to="/contato">
        <IoMdContact style={{ fontSize: "17px" }} />
        Contato
      </NavLink>
      <NavLink to="/contato">
        <GiLiquidSoap style={{ fontSize: "17px" }} />
        Liquidos
      </NavLink>
      <NavLink to="/contato">
        <GrProductHunt style={{ fontSize: "17px" }} />
        Nossos produtos
      </NavLink>
    </S.WrapperNav>
  );
};

export default NavComponent;
