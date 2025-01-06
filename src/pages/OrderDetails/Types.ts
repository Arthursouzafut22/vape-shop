import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

export type InputsProps = {
  ["cpf/cnpj"]: string;
  name: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export type UiCepProps = {
  register: UseFormRegister<InputsProps>;
  errors: FieldErrors<InputsProps>;
  setValue: UseFormSetValue<InputsProps>;
};
