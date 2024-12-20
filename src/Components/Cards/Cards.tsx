import * as S from "./Styles";
import { DadosProps } from "../../Api/UseRequest";
import { API_BASE_IMAGE } from "../../Api/baseUrl";
import FormateValue from "../FormateValue/FormateValue";
import Freight from "../../assets/image/frete_gratis.webp";
import UseMouseCard from "../../Hooks/UseMouseCard";
import { NavLink } from "react-router-dom";
import Icons from "../../pages/Product/Icons";

const Cards = ({ item }: { item: DadosProps }) => {
  const { refCard, refButton, refImg } = UseMouseCard();

  return (
    <S.Card ref={refCard}>
      <NavLink to={`/product/${item.id}`}>
        <span className="off">{item.desconto}% OFF</span>
        {item.imagem && (
          <img src={`${API_BASE_IMAGE}${item.imagem[0]}`} alt={item.nome} />
        )}
        <S.Text top={"12"}>{item.nome}</S.Text>
        <Icons id={item.id} />
        <S.Text size={"15"} color={"#078407"} weigth={"600"}>
          {FormateValue(item.preco)}{" "}
          <span style={{ fontSize: "13px" }}>via Pix</span>
        </S.Text>
        <div style={{ marginTop: "50px" }}></div>
        <S.ImgFreight src={Freight} alt="frete" ref={refImg} />
        <button ref={refButton}>Ver Produto</button>
      </NavLink>
    </S.Card>
  );
};

export default Cards;
