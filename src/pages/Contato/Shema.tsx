import * as yup from "yup";

export const validationShemaContato = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Digite um e-mail válido"
    ),
  name: yup.string().required("O nome é obrigatório"),
  mensagem: yup.string().required("Mensagem é obrigatório"),
});
