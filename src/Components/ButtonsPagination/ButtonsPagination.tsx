import * as S from "./Styles";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ButtonsPagination = () => {
  const numbersPage = [1, 2, 3];
  const { replacePage, nextPage, prevPage, activePrev, activeNext } =
    AuthPage();

  return (
    <S.WrapperButtons>
      {activePrev && (
        <button className="back" onClick={prevPage}>
          <MdOutlineArrowBackIos /> Anterior
        </button>
      )}
      <div>
        {numbersPage &&
          numbersPage.map((button) => (
            <S.ButtonPage key={button} onClick={replacePage}>
              {button}
            </S.ButtonPage>
          ))}
      </div>
      {activeNext && (
        <button className="next" onClick={nextPage}>
          Próximo <MdOutlineArrowForwardIos />
        </button>
      )}
    </S.WrapperButtons>
  );
};

export default ButtonsPagination;
