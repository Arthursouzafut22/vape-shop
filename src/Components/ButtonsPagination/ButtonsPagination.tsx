import * as S from "./Styles";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ButtonsPagination = () => {
  const numbersPage = [1, 2];
  const { replacePage, nextPage, prevPage, activePrev, activeNext } =
    AuthPage();

  return (
    <S.WrapperButtons>
      <button
        className="back"
        onClick={prevPage}
        style={{ visibility: activePrev ? "visible" : "hidden" }}
      >
        <MdOutlineArrowBackIos /> Anterior
      </button>

      <div className="btns-page">
        {numbersPage &&
          numbersPage.map((button) => (
            <S.ButtonPage key={button} onClick={replacePage}>
              {button}
            </S.ButtonPage>
          ))}
      </div>

      <button
        className="next"
        onClick={nextPage}
        style={{ visibility: activeNext ? "visible" : "hidden" }}
      >
        Próximo <MdOutlineArrowForwardIos />
      </button>
    </S.WrapperButtons>
  );
};

export default ButtonsPagination;
