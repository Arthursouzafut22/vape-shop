import { AuthFrete } from "../../../context/ContextFrete/ContextFrete";
import * as S from "./Styles";

const WrapperFrete = () => {
  const { selectedFrete, handleFreteChange } = AuthFrete();

  return (
    <S.RadioInput>
      <b>Escolha o melhor frete para você</b>
      <S.Input
        type="radio"
        value="49.9"
        onChange={() => handleFreteChange("transportadora", 49.9)}
        name="value-radio"
        checked={selectedFrete.tipo === "transportadora"}
        id="value-1"
      />
      <S.Label htmlFor="value-1">
        <S.Text>
          <S.Circle />
          Frete via Transportadora
        </S.Text>
        <S.Price>
          <span>R$49,90</span>
        </S.Price>
      </S.Label>

      <S.Input
        type="radio"
        value="0"
        onChange={() => handleFreteChange("gratis", 0)}
        checked={selectedFrete.tipo === "gratis"}
        name="value-radio"
        id="value-2"
      />
      <S.Label htmlFor="value-2">
        <S.Text>
          <S.Circle />
          Frete Grátis
        </S.Text>
        <S.Price>
          <span>Grátis</span>
        </S.Price>
      </S.Label>
    </S.RadioInput>
  );
};

export default WrapperFrete;
