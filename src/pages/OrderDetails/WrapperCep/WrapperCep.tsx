import * as S from "../Styles";
import Input from "../../../Components/Input/Input";
import { UiCepProps } from "../Types";
import WrapperFrete from "../WrapperFrete/WrapperFrete";
import { memo, useEffect } from "react";
import useCep from "../../../Api/RequestCep";
import LoaderForm from "../../../Components/LoaderForm/LoaderForm";

const WrapperCep = ({ register, errors, setValue }: UiCepProps) => {
  const { requestCep, dadosCep, loading, erro } = useCep();

  useEffect(() => {
    if (dadosCep) {
      setValue("endereco", dadosCep?.logradouro || "");
      setValue("bairro", dadosCep?.bairro || "");
      setValue("cidade", dadosCep?.localidade || "");
      setValue("estado", dadosCep?.estado || "");
    }
  }, [setValue, dadosCep]);

  return (
    <>
      <S.WrapperTwo>
        <b>Entrega</b>
        <div className="wpp-cep">
          <Input
            {...register("cep", {
              onChange: (e) => {
                const cep = e.target.value;
                if (cep.length === 8) {
                  requestCep(cep);
                }
              },
            })}
            label="CEP"
            placeholder="12345-000"
            maxLength={8}
            type="number"
            className="wpp-cep"
          />
          {loading && (
            <LoaderForm color="rgba(0, 0, 0, 0.1)" position="absolute" />
          )}
        </div>
        {errors.cep && <p>{errors.cep.message}</p>}
        {erro && <p style={{ color: "red" }}>CEP inválido</p>}
        <S.WrapeprInputs>
          <div>
            <Input
              {...register("endereco")}
              type="text"
              label="Endereço"
              placeholder="Rua, Avenida, Alameda"
            />
            {errors.endereco && <p>{errors.endereco.message}</p>}
          </div>
          <div>
            <Input
              {...register("numero")}
              type="number"
              label="Número"
              placeholder="3212"
            />
            {errors.numero && <p>{errors.numero.message}</p>}
          </div>
        </S.WrapeprInputs>
        <S.WrapeprInputs>
          <div>
            <Input label="Complemento" placeholder="Casa, Apartamento..." />
          </div>
          <div>
            <Input
              {...register("bairro")}
              type="text"
              label="Bairro"
              placeholder="Centro"
            />
            {errors.bairro && <p>{errors.bairro.message}</p>}
          </div>
        </S.WrapeprInputs>
        <S.WrapeprInputs>
          <div>
            <Input
              {...register("cidade")}
              type="text"
              label="Cidade"
              placeholder="Cidade"
            />
            {errors.cidade && <p>{errors.cidade.message}</p>}
          </div>
          <div>
            <Input
              {...register("estado")}
              type="text"
              label="Estado"
              placeholder="Estado"
            />
            {errors.estado && <p>{errors.estado.message}</p>}
          </div>
        </S.WrapeprInputs>
        <WrapperFrete />
      </S.WrapperTwo>
    </>
  );
};

export default memo(WrapperCep);
