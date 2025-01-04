import * as S from "../Styles";
import Input from "../../../Components/Input/Input";
import { UiCepProps } from "../Types";

const WrapperCep = ({ register, errors }: UiCepProps) => {
  return (
    <S.WrapperTwo>
      <b>Entrega</b>
      <Input
        {...register("cep")}
        label="CEP"
        placeholder="12345-000"
        type="number"
      />
      {errors.cep && <p>{errors.cep.message}</p>}
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
    </S.WrapperTwo>
  );
};

export default WrapperCep;
