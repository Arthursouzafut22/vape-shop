import * as S from "./Styles";
import { infosPay } from "./InfosPay";
import { useEffect, useState } from "react";
import Pix from "../../assets/image/soon-pix.svg";
import seguro from "../../assets/image/safe-environment.svg";
import FormateValue from "../../Components/FormateValue/FormateValue";
import { AuthPayment } from "../../context/ContextPayment/ContextPayment";

const Payment = () => {
  const { codigo, pixQrCode, amount } = AuthPayment();
  const [sucess, setSucess] = useState<boolean>(false);
  const [segundos, setSegundos] = useState(59);
  const [minutos, setMinutos] = useState(9);

  console.log("Ok");

  useEffect(() => {
    (() => {
      if (segundos < 0) {
        setSegundos(59);
        setMinutos(minutos - 1);
      }
    })();

    setTimeout(() => {
      // setSegundos((prev) => prev - 1);
    }, 1000);
  }, [segundos, minutos]);

  const clipText = () => {
    const clipboard = navigator.clipboard;
    if (clipboard) {
      clipboard.writeText(codigo);
      setSucess(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSucess(false);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [sucess]);

  return (
    <S.Section>
      <h2>Escaneie o QR Code abaixo para pagar:</h2>
      <div className="flexx">
        <div className="wrapper">
          {pixQrCode && (
            <S.CardPix>
              <p>Validade do pagamento:</p>
              <span className="time">
                {minutos}:{segundos}
              </span>
              <p>
                Total a pagar:{" "}
                <span className="pay" style={{ fontSize: "20px" }}>
                  {FormateValue(Number(amount))}
                </span>{" "}
              </p>
              <img src={pixQrCode} alt="QR Code do PIX" />
              {codigo && <S.Codigo value={codigo} />}
              <button onClick={clipText}>Copiar codigo</button>
              {sucess && <p className="clip">Codigo copiado com sucesso!</p>}
            </S.CardPix>
          )}
        </div>

        <S.WrapperInfo>
          <h3>Instruções para pagamento</h3>
          {infosPay &&
            infosPay.map(({ icon, title }, i) => (
              <div key={i} className="wrapper-infos">
                <span>{icon}</span>
                <p>{title}</p>
              </div>
            ))}
          <div className="wrapper-ambiente">
            <img src={Pix} alt="imagem-pix" />
            <div className="vertical"></div>
            <img src={seguro} alt="imagem-seguro" />
          </div>
          <span
            className="time"
            style={{ fontSize: "26px", fontWeight: "600" }}
          >
            0{minutos}:{segundos}
          </span>
        </S.WrapperInfo>
      </div>
    </S.Section>
  );
};

export default Payment;
