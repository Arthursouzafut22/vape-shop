import * as S from "./Styles";
import useImage from "./Utils";
import Icons from "./Icons";
import { SlBadge } from "react-icons/sl";
import { useParams } from "react-router-dom";
import WrapperLinks from "../WrapperLinks/WrapperLinks";
import useRequest from "../../Api/UseRequest";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import QuantityControl from "./QuantityControl/QuantityControl";
import FormateValue from "../../Components/FormateValue/FormateValue";
import ContainerPix from "./ContainerPix/ContainerPix";
import { AuthCart } from "../../context/Cart/CartContext";
import Spinner from "../../Components/Spinner/Spinner";
import { useEffect, useState } from "react";
import ContainerSabores from "./ContainerSabores/ContainerSabores";

const Product = () => {
  const { dados } = useRequest("/products");
  const { indexImg, replaceImage } = useImage();
  const { id } = useParams();
  const searchProduct = dados?.find((i) => i.id === Number(id));
  const { addProductCart } = AuthCart();
  const [getsabor, setGetSabor] = useState("");

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
  }, []);
  if (!searchProduct) return <Spinner />;

  return (
    <S.Section>
      <WrapperLinks />
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
            <ContainerSabores
              getsabor={getsabor}
              setGetSabor={setGetSabor}
              searchProduct={searchProduct}
            />
            <S.ContainerAmount>
              <p>Quantidade:</p>
              <QuantityControl />
            </S.ContainerAmount>

            <ContainerPix preco={searchProduct?.preco} />
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
