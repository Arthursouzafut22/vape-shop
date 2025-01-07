import * as S from "./Styles";
import { AuthPage } from "../../context/ContextPage/ContextPage";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ButtonsPagination = () => {
  const numbersPage: number[] = [1, 2];
  const {
    replacePage,
    nextPage,
    prevPage,
    activePrev,
    activeNext,
    indexColor,
  } = AuthPage();

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
          numbersPage.map((button, i) => (
            <S.ButtonPage
              key={i}
              onClick={(event) => replacePage(event, i)}
              style={{
                background: i === indexColor ? "#2f982f" : "none",
                color: i === indexColor ? "#ffffff" : "initial",
              }}
            >
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
