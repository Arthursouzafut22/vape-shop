import * as S from "./Styles";
import TheAtacado from "../../pages/Atacado/TheAtacado";
import Slide from "../../Components/Slide/Slide";

const Home = () => {
  return (
    <S.Main>
      <TheAtacado />
      <Slide />
    </S.Main>
  );
};

export default Home;
