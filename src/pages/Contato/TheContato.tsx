import * as S from "./Styles";
import Input from "../../Components/Input/Input";
import { useRef } from "react";
import UseMedia from "../../Hooks/UseMedia";

const Contato: React.FC = () => {
  const { mobile } = UseMedia("(max-width:998px)");
  const refUser = useRef<HTMLInputElement | null>(null);
  const refEmail = useRef<HTMLInputElement | null>(null);
  const refMensagem = useRef<HTMLTextAreaElement | null>(null);

  return (
    <S.Section>
      <h1>📩Contato📩</h1>
      <S.Wrapper mobile={mobile}>
        <S.DivOne>
          <h2>Fale Conosco</h2>
          <form className="form">
            <S.WrapperInputss>
              <Input
                ref={refUser}
                type="text"
                name="user"
                id="user"
                placeholder="Seu nome"
              />
              <Input
                ref={refEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Seu e-mail"
              />
            </S.WrapperInputss>
            <textarea
              ref={refMensagem}
              rows={12}
              name="mensagem"
              id="mensagem"
              placeholder="Sua mensagem"
            />
            <button>Enviar mensagem</button>
          </form>
        </S.DivOne>
        <S.DivTwo>
          <h2>SAC (Serviço de Atendimento ao Consumidor)</h2>
          <p>
            <span>E-mail:</span>
            atacadopod@gmail.com
          </p>
        </S.DivTwo>
      </S.Wrapper>
    </S.Section>
  );
};

export default Contato;
