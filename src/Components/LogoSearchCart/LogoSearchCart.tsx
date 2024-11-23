import * as S from "./Styles";
import Logo from "../../assets/image/logo.avif";
import Input from "../Input/Input";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const LogoSearchCart: React.FC = () => {
  return (
    <S.Wrapper>
      <div>
        <img src={Logo} alt="logo" />
        <Input
          type="text"
          name="text"
          value={"Descartavel"}
          placeholder="Oi, o que procura hoje ? :)"
        />
        <NavLink to="/cart">
          <GrCart
            style={{ fontSize: "26px", color: "#ffffff"}}
          />
          Carrinho
        </NavLink>
      </div>
    </S.Wrapper>
  );
};

export default LogoSearchCart;
