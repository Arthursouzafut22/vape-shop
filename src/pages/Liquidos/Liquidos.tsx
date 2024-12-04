import * as S from "./Styles";
import UseRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";

const Liquidos = () => {
  const { dados } = UseRequest("/liquidos");

  return (
    <S.Section>
      <S.Wrapper>
        {dados && dados.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
    </S.Section>
  );
};

export default Liquidos;
