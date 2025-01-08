import * as S from "../Product/Styles";
import { Link } from "react-router-dom";

const WrapperLinks = () => {
  return (
    <S.WrapperLinks>
      <div>
        <Link to={"/"}>Pagína inicial</Link>
        {">"}
        <Link to={"/atacado"}>Atacado</Link>
        {">"}
        <Link to={"/liquidos"}>Liquidos</Link>
      </div>
    </S.WrapperLinks>
  );
};

export default WrapperLinks;
