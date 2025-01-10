import * as S from "./Styles";
import Input from "../../Components/Input/Input";
import UseMedia from "../../Hooks/UseMedia";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShemaContato } from "./Shema";

type ContatosProps = {
  name: string;
  email: string;
  mensagem: string;
};

const Contato: React.FC = () => {
  const { mobile } = UseMedia("(max-width:998px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatosProps>({ resolver: yupResolver(validationShemaContato) });

  const onSubmit = (data: ContatosProps) => {
    console.log(data);
  };

  return (
    <S.Section>
      <h1>📩Contato📩</h1>
      <S.Wrapper mobile={mobile}>
        <S.DivOne>
          <h2>Fale Conosco</h2>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <S.WrapperInputss>
              <div className="caixa">
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Seu nome"
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="caixa">
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </S.WrapperInputss>
            <textarea
              {...register("mensagem", { required: true })}
              rows={12}
              name="mensagem"
              id="mensagem"
              placeholder="Sua mensagem"
            />
            {errors.mensagem && <p>{errors.mensagem.message}</p>}
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
