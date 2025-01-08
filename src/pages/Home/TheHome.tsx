import * as S from "./Styles";
import TheAtacado from "../../pages/Atacado/TheAtacado";
import Slide from "../../Components/Slide/Slide";

const Home = () => {
  return (
    <S.Main>
      <Slide/>
      <TheAtacado />
    </S.Main>
  );
};

export default Home;
