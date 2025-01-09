import useStopwatch from "../Utils";
import FormateValue from "../../../Components/FormateValue/FormateValue";
import { AuthPayment } from "../../../context/ContextPayment/ContextPayment";
import { useState, useEffect } from "react";
import * as S from "../Styles";

const PixValido = () => {
  const { minutos, segundos } = useStopwatch();
  const { pixQrCode, amount, codigo } = AuthPayment();
  const [sucess, setSucess] = useState<boolean>(false);

  // Copiar codigo de pagamento...
  const clipText = () => {
    const clipboard = navigator.clipboard;
    if (clipboard) {
      clipboard.writeText(codigo);
      setSucess(true);
    }
  };

  // Efeito para remover mensagem...
  useEffect(() => {
    const timer = setTimeout(() => {
      setSucess(false);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [sucess]);

  return (
    <>
      <p>Validade do pagamento:</p>
      <span className="time">
        0{minutos}:{segundos < 10 ? "0" + segundos : segundos}
      </span>
      <p>
        Total a pagar:{" "}
        <span className="pay" style={{ fontSize: "20px" }}>
          {FormateValue(Number(amount))}
        </span>{" "}
      </p>
      <img src={pixQrCode || ""} alt="QR Code do PIX" />
      {codigo && <S.Codigo value={codigo} />}
      <button onClick={clipText}>Copiar codigo</button>
      {sucess && <p className="clip">Codigo copiado com sucesso!</p>}
    </>
  );
};

export default PixValido;
