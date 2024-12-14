import * as S from "./Styles";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import QuantityControl from "../Product/QuantityControl/QuantityControl";
import { IoMdHeart } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthCart } from "../../context/CartContext";

const Cart: React.FC = () => {
  const { state } = AuthCart();

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
                    <p>{item.preco}</p>
                  </div>
                </S.WrapperOne>

                <S.WrapperTwo>
                  <QuantityControl />
                  <button className="button-remove">
                    <RiDeleteBin5Fill style={{ fontSize: "20px" }} />
                  </button>
                </S.WrapperTwo>

                <S.WrapperThree>
                  <p>R$ 200,00</p>
                </S.WrapperThree>
              </S.ProductCart>
            ))}
        </S.WrapperCart>
        <S.WrapperFinish>
          <div>
            <p>Total</p>
            <p>R$ 300,00</p>
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
