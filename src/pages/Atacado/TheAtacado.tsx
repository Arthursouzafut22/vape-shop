import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";

import Spinner from "../../Components/Spinner/Spinner";

const Atacado: React.FC = () => {
  const { dados, isLoading } = useRequest("/atacado");

  return (
    <S.Section>
      <h2>📦Atacado📦</h2>
      {isLoading && <Spinner />}
      <S.Wrapper>
        {dados && dados.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
    </S.Section>
  );
};

export default Atacado;
