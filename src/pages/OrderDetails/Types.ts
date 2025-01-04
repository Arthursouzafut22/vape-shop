import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

export type InputsProps = {
  email: string;
  telefone: string;
  name: string;
  ["cpf/cnpj"]: string;
  cep: string;
  endereco: string;
  numero:string;
  bairro: string;
  cidade: string;
  estado: string;
};

export type UiCepProps = {
  register: UseFormRegister<InputsProps>;
  errors: FieldErrors<InputsProps>;
};
