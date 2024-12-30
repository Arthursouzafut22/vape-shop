import * as S from "./Styles";
import { DadosProps } from "../../Api/Types";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import FormateValue from "../FormateValue/FormateValue";
import Freight from "../../assets/image/frete_gratis.webp";
import UseMouseCard from "../../Hooks/UseMouseCard";
import { NavLink } from "react-router-dom";
import Icons from "../../pages/Product/Icons";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { Suspense } from "react";
import Skeleton from "../Skeleton/Skeleton";

const Cards = ({ item }: { item: DadosProps }) => {
  const { refCard, refButton, refImg } = UseMouseCard();

  return (
    <S.Card ref={refCard}>
      <NavLink to={`/product/${item.id}`}>
        <span className="off">{item.desconto}% OFF</span>
        {item.imagem && (
          <Suspense fallback={<Skeleton />}>
            <OptimizedImage
              src={`${API_BASE_IMAGE}${item.imagem[0]}`}
              fallback={<Skeleton />}
              alt={item.nome}
            />
          </Suspense>
        )}
        <S.TextName>{item.nome}</S.TextName>
        <Icons id={item.id} />
        <S.TextPrice>{FormateValue(item.preco)}</S.TextPrice>
        <div style={{ marginTop: "50px" }}></div>
        <S.ImgFreight src={Freight} alt="frete" ref={refImg} />
        <button ref={refButton}>Ver Produto</button>
      </NavLink>
    </S.Card>
  );
};

export default Cards;
