import * as S from "./Styles";

const LoaderForm = ({
  color,
  position,
}: {
  color: string;
  position: string;
}) => {
  return <S.Loader color={color} position={position}></S.Loader>;
};

export default LoaderForm;
