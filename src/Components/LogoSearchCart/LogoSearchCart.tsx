import * as S from "./Styles";
import Logo from "../../assets/image/logo.avif";
import Input from "../Input/Input";
import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UseMedia from "../../Hooks/UseMedia";
import { AuthCart } from "../../context/Cart/CartContext";

const LogoSearchCart: React.FC = () => {
  const { mobile } = UseMedia("(max-width: 1129px)");
  const { state } = AuthCart();

  return (
    <S.Wrapper>
      <S.Div mobile={mobile}>
        <img src={Logo} alt="logo" />
        <S.Form className="form" mobile={mobile}>
          <Input
            type="text"
            name="text"
            value={""}
            placeholder="O que procura hoje ? :)"
          />
          <button>
            <FaSearch />
          </button>
        </S.Form>

        <NavLink to="/rastreio">
          <MdLocationPin style={{ fontSize: "26px" }} />
          {!mobile && (
            <div>
              <p style={{ textAlign: "left" }}>Onde está meu produto?</p>
              <p style={{ fontWeight: "bold" }}>Rastrear pedido</p>
            </div>
          )}
        </NavLink>

        <NavLink to="/cart">
          <S.ValueCart>{state.length}</S.ValueCart>
          <GrCart style={{ fontSize: "26px", color: "#ffffff" }} />
        </NavLink>
      </S.Div>
    </S.Wrapper>
  );
};

export default LogoSearchCart;
