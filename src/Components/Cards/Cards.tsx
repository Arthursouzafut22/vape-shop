import * as S from "./Styles";
import { DadosProps } from "../../Api/UseRequest";
import { baseUrlImage } from "./BaseUrlImage";
import FormateValue from "../FormateValue/FormateValue";
import Freight from "../../assets/image/frete_gratis.webp";
import UseMouseCard from "../../Hooks/UseMouseCard";

const Cards = ({ item }: { item: DadosProps }) => {
  const { refCard, refButton, refImg } = UseMouseCard();

  return (
    <S.Card ref={refCard}>
      {item.imagem && (
        <img src={`${baseUrlImage}${item.imagem}`} alt={item.nome} />
      )}
      <S.Text top={"12"}>{item.nome}</S.Text>
      <S.Text size={"15"} color={"#078407"} weigth={"600"}>
        {FormateValue(item.preco)}
      </S.Text>
      <div style={{ marginTop: "50px" }}></div>
      <S.ImgFreight src={Freight} alt="frete" ref={refImg} />
      <button ref={refButton}>Ver Produto</button>
    </S.Card>
  );
};

export default Cards;
