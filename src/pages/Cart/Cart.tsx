import * as S from "./Styles";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import { IoMdHeart } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthCart } from "../../context/Cart/CartContext";
import FormateValue from "../../Components/FormateValue/FormateValue";
import QuantityControlCart from "../Product/QuantityControl/QuantityControlCart";
import UseMedia from "../../Hooks/UseMedia";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { state, removeProduct, total } = AuthCart();
  const { mobile } = UseMedia("(max-width:981px)");
  const navigate = useNavigate();

  return (
    <S.Section>
      <h1>🛒Meu Carrinho de compras🛒</h1>
      <span>Compra Qualificada!</span>
      <S.ContainerCart mobile={mobile}>
        {state.length === 0 ? (
          <p className="p">Seu carrinho está vazio 😢...</p>
        ) : (
          <>
            {" "}
            <S.Cart>
              {state &&
                state.map((item) => (
                  <S.Product mobile={mobile} key={item.id}>
                    <img
                      src={API_BASE_IMAGE + item.imagem[0]}
                      alt={item.nome}
                      width={90}
                    />
                    <div className="wrapper-product" style={{ width: "100%" }}>
                      <div className="wrapper1">
                        <div>
                          <p>{item.nome}</p>
                          <p>Preço: {FormateValue(item.preco)}</p>
                        </div>
                        {!mobile && (
                          <p style={{ fontWeight: "600" }}>
                            Total: {FormateValue(item.preco * item.quantidade)}
                          </p>
                        )}
                      </div>
                      <div className="wrapper2">
                        <QuantityControlCart
                          product={item}
                          quantidade={item.quantidade}
                        />
                        <button
                          className="button-remove"
                          onClick={() => removeProduct(item.id)}
                        >
                          <RiDeleteBin5Fill style={{ fontSize: "20px" }} />
                        </button>
                      </div>
                    </div>
                  </S.Product>
                ))}
            </S.Cart>
            <S.WrapperFinish mobile={mobile}>
              <div>
                <p>Total:</p>
                <p>{FormateValue(total)}</p>
              </div>
              <p>
                Todas as entregas possuem código de rastreio <IoMdHeart />{" "}
              </p>
              <button onClick={() => navigate("/order")}>
                Finalizar Compra
              </button>
            </S.WrapperFinish>
          </>
        )}
      </S.ContainerCart>
    </S.Section>
  );
};

export default Cart;
