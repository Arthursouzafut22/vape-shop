import * as S from "./Styles";
import Banner from "../../assets/image/banner_desktop.webp";
import { GiPadlock } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <S.Header>
      <div>
        <GiPadlock style={{ fontSize: "1.25rem", color: "#ffffff" }} />
        <p>Compra 100% segura</p>
      </div>
      <S.WrapperBanner>
        <img src={Banner} alt="banner" />
        <img src={Banner} alt="banner" />
      </S.WrapperBanner>
    </S.Header>
  );
};

export default Header;
