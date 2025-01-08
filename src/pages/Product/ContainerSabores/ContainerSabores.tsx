import * as S from "../Styles";
import { SaboresProps } from "./Types";
import { useState } from "react";
import { memo } from "react";

const ContainerSabores: React.FC<SaboresProps> = ({
  searchProduct,
  getsabor,
  setGetSabor,
}) => {
  const [ixSabor, setIxSabor] = useState(0);

  const getSabor = (sabor: string, index: number) => {
    setGetSabor(sabor);
    setIxSabor(index);
  };

  return (
    <>
      <p>Sabor: {getsabor || searchProduct?.sabores[0]}</p>
      <S.ContainerSabores>
        {searchProduct?.sabores.map((sabor, index) => (
          <button
            key={index}
            onClick={() => getSabor(sabor, index)}
            style={{
              background: index === ixSabor ? "#2f982f" : "none",
              color: index === ixSabor ? "#ffffff" : "initial",
            }}
          >
            {sabor}
          </button>
        ))}
      </S.ContainerSabores>
    </>
  );
};

export default memo(ContainerSabores);
