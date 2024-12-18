import * as S from "./Styles";
import Input from "../../../Components/Input/Input";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AuthCart } from "../../../context/Cart/CartContext";

const QuantityControl = () => {
  const { quantity, setQuantiTy } = AuthCart();

  return (
    <S.WrapperControl>
      <button
        onClick={() => setQuantiTy((prev) => prev - 1)}
        style={{ pointerEvents: quantity === 1 ? "none" : "initial" }}
      >
        <FaMinus />
      </button>
      <Input
        type="number"
        name="quantiTy"
        value={quantity}
        onChange={({ target }) => setQuantiTy(Number(target.value))}
      />
      <button onClick={() => setQuantiTy((prev) => prev + 1)}>
        <FaPlus />
      </button>
    </S.WrapperControl>
  );
};

export default QuantityControl;
