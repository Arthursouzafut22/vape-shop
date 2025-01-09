import * as S from "./Styles";
import { infosPay } from "./InfosPay";
import Pix from "../../assets/image/soon-pix.svg";
import seguro from "../../assets/image/safe-environment.svg";
import { AuthPayment } from "../../context/ContextPayment/ContextPayment";
import PaymentExpired from "./PaymentExpired";
import useStopwatch from "./Utils.tsx";
import PixValido from "./PixValido/PixValido.tsx";

const Payment = () => {
  const { pixQrCode } = AuthPayment();
  const { minutos, segundos } = useStopwatch();

  return (
    <S.Section>
      <h2>Escaneie o QR Code abaixo para pagar:</h2>
      <div className="flexx">
        <div className="wrapper">
          {pixQrCode && (
            <S.CardPix>
              {minutos === 0 && segundos === 0 ? (
                <PaymentExpired />
              ) : (
                <PixValido />
              )}
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
          ></span>
        </S.WrapperInfo>
      </div>
    </S.Section>
  );
};

export default Payment;
