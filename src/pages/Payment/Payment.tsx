import { useState } from "react";
import * as S from "./Styles";
import Pix from "../../assets/image/soon-pix.svg";
import seguro from "../../assets/image/safe-environment.svg";
import FormateValue from "../../Components/FormateValue/FormateValue";
import createPixPayment from "../../Api/CreatePixPayment ";
import { infosPay } from "./InfosPay";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [pixQrCode, setPixQrCode] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const paymentData = await createPixPayment(amount, description);
    if (
      paymentData.qr_codes &&
      paymentData.qr_codes[0] &&
      paymentData.qr_codes[0].text &&
      paymentData.qr_codes[0].links
    ) {
      setCodigo(paymentData.qr_codes[0].text);
      setPixQrCode(paymentData.qr_codes[0].links[0].href);
      setLoading(false);
    } else {
      alert("Erro: QR Code não encontrado.");
    }
  };

  return (
    <S.Section>
      <h1 style={{ visibility: "hidden" }}>Pagamento por PIX</h1>
      <input
        type="number"
        placeholder="Valor (R$)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        // style={{ visibility: "hidden" }}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // style={{ visibility: "hidden" }}
      />
      <button onClick={handlePayment}>Gerar QR Code</button>

      <div className="flexx">
        <div className="wrapper">
          {/* <h2>Escaneie o QR Code abaixo para pagar:</h2> */}
          {loading && <p>Carregando...</p>}
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
