import * as S from "./Styles";
import SvgPix from "../../../assets/image/soon-pix.svg";

const WrapperPix = () => {
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
      <button>FINALIZAR COMPRA</button>
    </S.WrapperPix>
  );
};

export default WrapperPix;
