import * as S from "./Styles";
import Pix from "../../assets/image/soon-pix.svg";
import seguro from "../../assets/image/safe-environment.svg";
import FormateValue from "../../Components/FormateValue/FormateValue";

import { infosPay } from "./InfosPay";
import { AuthPayment } from "../../context/ContextPayment/ContextPayment";

const Payment = () => {
  const { codigo, pixQrCode,  amount } = AuthPayment();

  return (
    <S.Section>
      <h1 style={{ visibility: "hidden" }}>Pagamento por PIX</h1>

      <div className="flexx">
        <div className="wrapper">
          {/* <h2>Escaneie o QR Code abaixo para pagar:</h2> */}
          {/* {loading && <p>Carregando...</p>} */}
          {pixQrCode && (
            <S.CardPix>
              <p>Validade do pagamento:</p>
              <span className="time">03:50</span>
              <p>
                Total a pagar:{" "}
                <span className="pay" style={{ fontSize: "20px" }}>
                  {FormateValue(Number(amount))}
                </span>{" "}
              </p>
              <img src={pixQrCode} alt="QR Code do PIX" />
              {codigo && <S.Codigo value={codigo} />}
              <button>Copiar codigo</button>
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
        </S.WrapperInfo>
      </div>
    </S.Section>
  );
};

export default Payment;
