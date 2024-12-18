import * as S from "./Styles";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import { IoMdHeart } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthCart } from "../../context/Cart/CartContext";
import FormateValue from "../../Components/FormateValue/FormateValue";
import QuantityControlCart from "../Product/QuantityControl/QuantityControlCart";

const Cart: React.FC = () => {
  const { state, total, removeProduct } = AuthCart();
  console.log(total);

  return (
    <S.Section>
      <h1>🛒Meu Carrinho de compras🛒</h1>
      <span>Compra Qualificada!</span>
      <S.ContainerCart>
        <S.WrapperCart>
          <div className="body">
            <span>Produto</span>
            <div>
              <span>Quantidade</span>
              <span>Total</span>
            </div>
          </div>
          {state.length === 0 && <p>Carrinho Vazio 😢...</p>}
          {state &&
            state.map((item) => (
              <S.ProductCart>
                <S.WrapperOne>
                  <img
                    src={API_BASE_IMAGE + item.imagem[0]}
                    alt={item.nome}
                    width={90}
                  />
                  <div>
                    <p>{item.nome}</p>
                    <p>{FormateValue(item.preco)}</p>
                  </div>
                </S.WrapperOne>

                <S.WrapperTwo>
                  <QuantityControlCart product={item} quantidade={item.quantidade} />
                  <button
                    className="button-remove"
                    onClick={() => removeProduct(item.id)}
                  >
                    <RiDeleteBin5Fill style={{ fontSize: "20px" }} />
                  </button>
                </S.WrapperTwo>

                <S.WrapperThree>
                  <p>{FormateValue(item.preco * item.quantidade)}</p>
                </S.WrapperThree>
              </S.ProductCart>
            ))}
        </S.WrapperCart>
        <S.WrapperFinish>
          <div>
            <p>Total</p>
            <p>{FormateValue(total)}</p>
          </div>
          <p>
            Todas as entregas possuem código de rastreio <IoMdHeart />{" "}
          </p>
          <button>Finalizar Compra</button>
        </S.WrapperFinish>
      </S.ContainerCart>
    </S.Section>
  );
};

export default Cart;
