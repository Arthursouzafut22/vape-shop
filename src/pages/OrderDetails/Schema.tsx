import * as yup from "yup";
import { cpf, cnpj } from "cpf-cnpj-validator";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Digite um telefone válido")
    .required("O telefone é obrigatório"),
  name: yup.string().required("O nome completo é obrigatório"),
  ["cpf/cnpj"]: yup
    .string()
    .required("O CPF/CNPJ é obrigatório")
    .test("is-valid-cpf-cnpj", "Digite um CPF ou CNPJ válido", (value) => {
      if (!value) return false;
      const cleanedValue = value.replace(/[\s.-/]/g, "");
      return cpf.isValid(cleanedValue) || cnpj.isValid(cleanedValue);
    }),
  cep: yup
    .string()
    .required("Informe CEP válido")
    .matches(/^\d{5}-?\d{3}$/, "Digite um CEP válido")
    .length(8, "O CEP deve ter 8 dígitos")
    .max(8, "Apenas 8 digitos são aceitos"),

  endereco: yup.string().required("O endereço é obrigatório"),
  numero: yup.string().required("O Número é obrigatório"),
  bairro: yup.string().required("O Bairro é obrigatório"),
  cidade: yup.string().required("A Cidade é obrigatório"),
  estado: yup.string().required("o Estado é obrigatório"),
});
