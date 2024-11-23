import * as S from "./Styles";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";

const Nav: React.FC = () => {
  return (
    <S.Nav>
      <S.WrapperNav>
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
      </S.WrapperNav>
    </S.Nav>
  );
};

export default Nav;
