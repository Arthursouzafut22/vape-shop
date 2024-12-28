import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import ButtonsPagination from "../../Components/ButtonsPagination/ButtonsPagination";

const Liquidos = () => {
  const { page } = AuthPage();
  const { dados, isLoading } = useRequest(`/liquido?page=${page}&limit=8`);

  return (
    <S.Section>
      <h2>💧Líquidos💧</h2>
      {isLoading && <Spinner />}
      <S.Wrapper>
        {dados &&
          dados.produtos.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
      <ButtonsPagination />
    </S.Section>
  );
};

export default Liquidos;
