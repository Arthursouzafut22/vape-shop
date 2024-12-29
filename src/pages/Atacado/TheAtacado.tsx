import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import ButtonsPagination from "../../Components/ButtonsPagination/ButtonsPagination";
import Slide from "../../Components/Slide/Slide";

const Atacado: React.FC = () => {
  const { page } = AuthPage();
  const { dados, isLoading } = useRequest(`/atacado?page=${page}&limit=12`);

  return (
    <S.Section>
      <h2>📦Atacado📦</h2>
      {isLoading && <Spinner />}
      <S.Wrapper>
        {dados &&
          dados.produtos.map((item) => <Cards key={item.id} item={item} />)}
      </S.Wrapper>
      <Slide />
      <ButtonsPagination />
    </S.Section>
  );
};

export default Atacado;
