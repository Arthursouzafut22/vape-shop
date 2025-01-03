import * as S from "./Styles";
import { useEffect } from "react";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import Slide from "../../Components/Slide/Slide";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import ButtonsPagination from "../../Components/ButtonsPagination/ButtonsPagination";

const Atacado: React.FC = () => {
  const { page, setPage } = AuthPage();
  const { dados, isLoading } = useRequest(`/atacado?page=${page}&limit=12`);

  useEffect(() => {
    setPage(1);
  }, [setPage]);

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
