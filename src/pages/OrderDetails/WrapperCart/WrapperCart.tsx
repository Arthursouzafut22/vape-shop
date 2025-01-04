import * as S from "./Styles";
import { AuthCart } from "../../../context/Cart/CartContext";
import { API_BASE_IMAGE } from "../../../Api/baseUrl";
import FormateValue from "../../../Components/FormateValue/FormateValue";
import { AuthFrete } from "../../../context/ContextFrete/ContextFrete";

const WrapperCart = () => {
  const { state, total } = AuthCart();
  const { selectedFrete } = AuthFrete();

  return (
    <S.WrapperCart>
      <b>Seu carrinho</b>
      {state &&
        state?.map((i) => (
          <S.Product key={i.id}>
            <div className="container">
              <img src={API_BASE_IMAGE + i.imagem[0]} alt="imagem" />
              <div>
                <p>{i.nome}</p>
                <p>{i.sabores[0]}</p>
              </div>
            </div>
            <span>{i.quantidade} un.</span>
          </S.Product>
        ))}
      <div className="total">
        <p>Total</p>
        <span>{FormateValue(total + selectedFrete.valor)}</span>
      </div>
    </S.WrapperCart>
  );
};

export default WrapperCart;
