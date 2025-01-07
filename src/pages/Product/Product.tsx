import * as S from "./Styles";
import { useParams } from "react-router-dom";
import useRequest from "../../Api/UseRequest";
import { Link } from "react-router-dom";
import useImage from "./Utils";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import QuantityControl from "./QuantityControl/QuantityControl";
import FormateValue from "../../Components/FormateValue/FormateValue";
import { SlBadge } from "react-icons/sl";
import { FaPix } from "react-icons/fa6";
import { AuthCart } from "../../context/Cart/CartContext";
import Icons from "./Icons";
import Spinner from "../../Components/Spinner/Spinner";
import { useEffect, useState } from "react";

const Product = () => {
  const { dados } = useRequest("/products");
  const { indexImg, replaceImage } = useImage();
  const { id } = useParams();
  const searchProduct = dados?.find((i) => i.id === Number(id));
  const { addProductCart } = AuthCart();
  const [getsabor, setGetSabor] = useState("");
  const [ixSabor, setIxSabor] = useState(0);

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
  }, []);
  if (!searchProduct) return <Spinner />;

  const getSabor = (sabor: string, index: number) => {
    setGetSabor(sabor);
    setIxSabor(index);
  };

  return (
    <S.Section>
      <S.WrapperLinks>
        <div>
          <Link to={"/"}>Pagína inicial</Link>
          <Link to={"/atacado"}>Atacado</Link>
          <Link to={"/liquidos"}>Liquidos</Link>
        </div>
      </S.WrapperLinks>
      <S.WrapperGlobal>
        <S.WrapperOne>
          <picture className="imgsProduct">
            {searchProduct &&
              searchProduct?.imagem &&
              searchProduct?.imagem.map((item, index) => (
                <img
                  src={`${API_BASE_IMAGE + item}`}
                  alt={item}
                  key={index}
                  style={{
                    border: index === indexImg ? "2px solid #2f982f" : "none",
                    borderRadius: "5px",
                  }}
                  onClick={(event) => replaceImage(event, index)}
                />
              ))}
          </picture>
          <picture className="imgPrincipal">
            {searchProduct?.imagem && (
              <img
                src={`${API_BASE_IMAGE + searchProduct?.imagem[indexImg]}`}
                alt="imagem"
              />
            )}
          </picture>
        </S.WrapperOne>
        <S.WrapperTwo>
          <div className={"div-one"}>
            <h1>{searchProduct?.nome}</h1>
            <p>{FormateValue(searchProduct?.preco)}</p>
            <span>Envio via Transportadora!</span>
            <Icons id={searchProduct.id} />
          </div>

          <div className={"div-two"}>
            <p>Sabor: {getsabor || searchProduct?.sabores[0]}</p>
            <S.ContainerSabores>
              {searchProduct?.sabores.map((sabor, index) => (
                <button
                  key={index}
                  onClick={() => getSabor(sabor, index)}
                  style={{
                    background: index === ixSabor ? "#2f982f" : "none",
                    color: index === ixSabor ? "#ffffff" : "initial",
                  }}
                >
                  {sabor}
                </button>
              ))}
            </S.ContainerSabores>
            <S.ContainerAmount>
              <p>Quantidade:</p>
              <QuantityControl />
            </S.ContainerAmount>

            <S.ContainerPix>
              <FaPix style={{ fontSize: "1.7rem", color: "#00B27A" }} />
              <div>
                <p>
                  <span className="price">
                    {FormateValue(searchProduct?.preco)}
                  </span>{" "}
                  no pix <span>0% de desconto</span>
                </p>
                <p>Pague com pix e economize R$ 0,00</p>
              </div>
            </S.ContainerPix>
            <p className="buy">
              <SlBadge /> Compra Segura Produto Original.
            </p>
            <S.ButtonAddCart
              onClick={() => addProductCart(searchProduct, getsabor)}
            >
              ADICIONAR AO CARRINHO
            </S.ButtonAddCart>
          </div>
        </S.WrapperTwo>
      </S.WrapperGlobal>
    </S.Section>
  );
};

export default Product;
