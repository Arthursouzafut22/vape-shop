import * as S from "./Styles";
import Input from "../../Components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./Schema";
import { InputsProps } from "./Types";

const OrderDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({ resolver: yupResolver(validationSchema) });

  function onSubmit(data: InputsProps) {
    console.log(data);
  }

  return (
    <S.Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperOne>
          <b>Identificação</b>
          <div className="filho-1">
            <div>
              <Input
                {...register("email", { required: true })}
                placeholder="email@gmail.com"
                label="E-mail"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <Input
                {...register("telefone", { required: true })}
                placeholder="(99) 999999999"
                label="Telefone"
                type="number"
              />
              {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>
          </div>
          <div className="filho-1">
            <div>
              <Input
                {...register("name", { required: true })}
                placeholder="Nome e Sobrenome"
                label="Nome completo"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <Input
                {...register("cpf/cnpj", { required: true })}
                placeholder="123.456.789-12"
                label="CPF/CNPJ"
                type="number"
              />
              {errors["cpf/cnpj"] && <p>{errors["cpf/cnpj"].message}</p>}
            </div>
          </div>
        </S.WrapperOne>
        <button>bvv</button>
      </form>
    </S.Section>
  );
};

export default OrderDetails;
