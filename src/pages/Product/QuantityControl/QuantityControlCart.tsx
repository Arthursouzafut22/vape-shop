import * as S from "./Styles";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Input from "../../../Components/Input/Input";
import { AuthCart } from "../../../context/Cart/CartContext";
import { DadosProps } from "../../../Api/UseRequest";

type PropsQuanty = {
  quantidade: number;
  product: DadosProps;
};

const QuantityControlCart = ({ quantidade, product }: PropsQuanty) => {
  const [quantity, setQuantiTy] = useState(quantidade);
  const { updateIncrement, updateDescrement } = AuthCart();

  return (
    <S.WrapperControl>
      <button
        onClick={() => updateDescrement(quantity, product)}
        style={{ pointerEvents: quantidade === 1 ? "none" : "initial" }}
      >
        <FaMinus />
      </button>
      <Input
        type="number"
        name="quantiTy"
        value={quantidade}
        onChange={({ target }) => setQuantiTy(Number(target.value))}
      />
      <button onClick={() => updateIncrement(quantity, product)}>
        <FaPlus />
      </button>
    </S.WrapperControl>
  );
};

export default QuantityControlCart;
