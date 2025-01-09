import Qrcode from "../../assets/image/png.png";
import { IoReload } from "react-icons/io5";
import useStopwatch from "./Utils";

const PaymentExpired = () => {
  const { setMinutos, setSegundos } = useStopwatch();

  const initialPix = () => {
    setMinutos(9);
    setSegundos(59);
  };

  return (
    <>
      <>
        <p style={{ color: "red" }}>Ops!, tente novamente</p>
        <img
          src={Qrcode}
          alt="imagem-qr-code"
          style={{ maxWidth: "50%", opacity: "0.3" }}
        />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginTop: "6px",
          }}
          onClick={initialPix}
        >
          <IoReload />
          GERAR NOVO PIX
        </button>
      </>
    </>
  );
};

export default PaymentExpired;
