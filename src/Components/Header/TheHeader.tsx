import * as S from "./Styles";
import Banner from "../../assets/image/banner_desktop.webp";
import { GiPadlock } from "react-icons/gi";
import Nav from "../Nav/TheNav";
import LogoSearchCart from "../LogoSearchCart/LogoSearchCart";
import UseMedia from "../../Hooks/UseMedia";

const Header: React.FC = () => {
  const { mobile } = UseMedia("(max-width:767px)");
  return (
    <S.Header>
      {mobile && (
        <S.DivPay>
          <GiPadlock style={{ fontSize: "1.25rem", color: "#ffffff" }} />
          <p>Compra 100% segura</p>
        </S.DivPay>
      )}
      <S.WrapperBanner>
        <img src={Banner} alt={"banner"} />
        <img src={Banner} alt={"banner"} />
      </S.WrapperBanner>
      <LogoSearchCart />
      <Nav />
    </S.Header>
  );
};

export default Header;
