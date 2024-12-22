import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import Spinner from "../../Components/Spinner/Spinner";

const Liquidos = () => {
  const { dados, isLoading } = useRequest("/liquidos");

  return (
    <S.Section>
      <h2>💧Líquidos💧</h2>
      {isLoading && <Spinner />}
      <S.Wrapper>
        {dados && dados.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
    </S.Section>
  );
};

export default Liquidos;
