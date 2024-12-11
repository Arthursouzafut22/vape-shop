import * as S from "./Styles";
import useRequest from "../../Api/UseRequest";
import Cards from "../../Components/Cards/Cards";
import { Suspense } from "react";

const Atacado: React.FC = () => {
  const { dados } = useRequest("/atacado");

  return (
    <S.Section>
      <h2>📦Atacado📦</h2>
      <S.Wrapper>
        {dados &&
          dados.map((item) => (
            <Suspense fallback={<p>Carregando...</p>}>
              <Cards key={item.id} item={item} />
            </Suspense>
          ))}
      </S.Wrapper>
    </S.Section>
  );
};

export default Atacado;
