import * as S from "./Styles";
import { useParams } from "react-router-dom";
import useRequest from "../../Api/UseRequest";
import { Link } from "react-router-dom";
import useImage from "./Utils";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import { IoStarSharp } from "react-icons/io5";
import QuantityControl from "./QuantityControl/QuantityControl";
import FormateValue from "../../Components/FormateValue/FormateValue";
import { SlBadge } from "react-icons/sl";
import { FaPix } from "react-icons/fa6";

const Product = () => {
  const { dados } = useRequest("/products");
  const { indexImg, replaceImage, refImage } = useImage();
  const { id } = useParams();
  const searchProduct = dados?.find((i) => i.id === Number(id));

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
            {searchProduct?.imagem &&
              searchProduct?.imagem.map((item, index) => (
                <img
                  src={`${API_BASE_IMAGE + item}`}
                  alt={item}
                  key={index}
                  onClick={(event) => replaceImage(event, index)}
                />
              ))}
          </picture>
          <picture className="imgPrincipal">
            {searchProduct?.imagem && (
              <img
                src={`${API_BASE_IMAGE + searchProduct?.imagem[indexImg]}`}
                alt="imagem"
                ref={refImage}
              />
            )}
          </picture>
        </S.WrapperOne>
        <S.WrapperTwo>
          <div className={"div-one"}>
            <h1>{searchProduct?.nome}</h1>
            <p>{FormateValue(searchProduct?.preco)}</p>
            <span>Envio via Transportadora!</span>
            <S.ContainerIcons>
              {new Array(5)
                .fill(<IoStarSharp style={{ color: "#FFA800" }} />)
                .map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
            </S.ContainerIcons>
          </div>

          <div className={"div-two"}>
            <p>Sabor: {searchProduct?.sabores[0]}</p>
            <S.ContainerSabores>
              {searchProduct?.sabores.map((sabor) => (
                <button key={sabor}>{sabor}</button>
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
            <S.ButtonAddCart>ADICIONAR AO CARRINHO</S.ButtonAddCart>
          </div>
        </S.WrapperTwo>
      </S.WrapperGlobal>
    </S.Section>
  );
};

export default Product;
