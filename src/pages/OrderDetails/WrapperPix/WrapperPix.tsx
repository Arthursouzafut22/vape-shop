import * as S from "./Styles";
import SvgPix from "../../../assets/image/soon-pix.svg";
import { AuthPayment } from "../../../context/ContextPayment/ContextPayment";
import LoaderForm from "../../../Components/LoaderForm/LoaderForm";

const WrapperPix = () => {
  const { loading } = AuthPayment();

  return (
    <S.WrapperPix>
      <b>Pagamento</b>
      <img src={SvgPix} alt="imagem-pix" />
      <div className="details-pix">
        <p>
          Ao selecionar o Pix, você será encaminhado para um ambiente seguro
          para finalizar seu pagamento.
        </p>
      </div>
      <button>
        {loading ? (
          <LoaderForm color="#ffffff" position="initial" />
        ) : (
          "FINALIZAR COMPRA"
        )}
      </button>
    </S.WrapperPix>
  );
};

export default WrapperPix;
