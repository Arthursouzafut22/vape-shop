import * as S from "./Styles";
import UseRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import { Suspense } from "react";

const Home = () => {
  const { dados } = UseRequest("/atacado");

  return (
    <S.Main>
      <h2>📦Atacado📦</h2>
      <S.Wrapper>
        {dados &&
          dados.map((item) => (
            <Suspense fallback={<p>Carregando...</p>}>
              <Cards key={item.id} item={item} />
            </Suspense>
          ))}
      </S.Wrapper>
    </S.Main>
  );
};

export default Home;
