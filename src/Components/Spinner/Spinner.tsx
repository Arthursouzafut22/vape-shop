import * as S from "./Styles";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: "1",
        height: "50vh",
      }}
    >
      <S.Svg viewBox="25 25 50 50" className="container">
        <S.Circle cx="50" cy="50" r="20" className="loader"></S.Circle>
      </S.Svg>
    </div>
  );
};

export default Spinner;
