import * as S from "../Styles";
import { FaPix } from "react-icons/fa6";
import FormateValue from "../../../Components/FormateValue/FormateValue";

const ContainerPix = ({ preco }: { preco: number }) => {
  return (
    <S.ContainerPix>
      <FaPix style={{ fontSize: "1.7rem", color: "#00B27A" }} />
      <div>
        <p>
          <span className="price">{FormateValue(preco)}</span> no pix{" "}
          <span>0% de desconto</span>
        </p>
        <p>Pague com pix e economize R$ 0,00</p>
      </div>
    </S.ContainerPix>
  );
};

export default ContainerPix;
