import * as S from "./Styles";
import Pagamento from "../../assets/image/Meios-de-Pagamento.webp";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <div className="filho-1">
          <h3>ATENDIMENTO AO CONSUMIDOR</h3>
          <p>
            Precisa de ajuda? Entre em contato com o meu SAC! E-mail:
            vapeatacado@gmail.com Telefone: 0800 0171 272 Seg. a Sex. das 09:00
            às 17:00 exceto feriados
          </p>
        </div>
        <div className="filho-2">
          <h3>PAGAMENTO</h3>
          <p>
            Meu sistema de pagamento online é operado por uma empresa
            especializada em segurança de pagamento online. Para mais
            informações, vá para a seção "Pagamento" dentro de "Perguntas
            Frequentes".
          </p>
        </div>
        <div className="filho-3">
          <h3>ENTREGA</h3>
          <p>
            O prazo de entrega de cada pedido irá depender do endereço de
            entrega do mesmo. Para consultar o seu prazo, preencha os dados de
            "Endereço de Entrega" na cesta de compras.
          </p>
        </div>
      </S.Wrapper>
      <img src={Pagamento} alt="pagamento" />
    </S.Footer>
  );
};

export default Footer;
