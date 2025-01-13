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
import { DadosProps } from "../../Api/Types";

const Product = () => {
  const { dados } = useRequest("/products");
  const { indexImg, replaceImage } = useImage();
  const { id } = useParams();
  const { addProductCart } = AuthCart();
  const [getsabor, setGetSabor] = useState("");
  const [productItem, setProductItem] = useState<DadosProps>();

  useEffect(() => {
    if (Array.isArray(dados)) {
      const searchProduct = dados?.find((i) => i.id === Number(id));
      setProductItem(searchProduct);
    }
    window.scrollTo({ behavior: "auto", top: 0 });
  }, [dados, id]);
  if (!productItem) return <Spinner />;

  return (
    <S.Section>
      <WrapperLinks />
      <S.WrapperGlobal>
        <S.WrapperOne>
          <picture className="imgsProduct">
            {productItem &&
              productItem?.imagem &&
              productItem?.imagem.map((item, index) => (
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
            {productItem?.imagem && (
              <img
                src={`${API_BASE_IMAGE + productItem?.imagem[indexImg]}`}
                alt="imagem"
              />
            )}
          </picture>
        </S.WrapperOne>
        <S.WrapperTwo>
          <div className={"div-one"}>
            <h1>{productItem?.nome}</h1>
            <p>{FormateValue(productItem?.preco)}</p>
            <span>Envio via Transportadora!</span>
            <Icons id={productItem.id} />
          </div>

          <div className={"div-two"}>
            <ContainerSabores
              getsabor={getsabor}
              setGetSabor={setGetSabor}
              searchProduct={productItem}
            />
            <S.ContainerAmount>
              <p>Quantidade:</p>
              <QuantityControl />
            </S.ContainerAmount>

            <ContainerPix preco={productItem?.preco} />
            <p className="buy">
              <SlBadge /> Compra Segura Produto Original.
            </p>
            <S.ButtonAddCart
              onClick={() => addProductCart(productItem, getsabor)}
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
