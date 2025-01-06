import * as S from "./Styles";
import Input from "../../Components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./Schema";
import { InputsProps } from "./Types";
import WrapperCep from "./WrapperCep/WrapperCep";
import WrapperCart from "./WrapperCart/WrapperCart";
import WrapperPix from "./WrapperPix/WrapperPix";
import { useNavigate } from "react-router-dom";
import { AuthPayment } from "../../context/ContextPayment/ContextPayment";
import { AuthCart } from "../../context/Cart/CartContext";
import { AuthFrete } from "../../context/ContextFrete/ContextFrete";

const OrderDetails = () => {
  const { handlePayment, setAmount, setDescription, loading } = AuthPayment();
  const { total } = AuthCart();
  const { selectedFrete } = AuthFrete();
  console.log(total + selectedFrete.valor);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputsProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      endereco: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  });

  async function onSubmit(dataValues: InputsProps) {
    console.log(dataValues);

    if (dataValues && !loading) {
      await handlePayment();
      setAmount(String(total + selectedFrete.valor));
      setDescription("QR Code do PIX Gerado.");
      navigate("/payment");
    }
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
        <WrapperCep register={register} errors={errors} setValue={setValue} />
        <WrapperPix />
      </form>
      <WrapperCart />
    </S.Section>
  );
};

export default OrderDetails;
