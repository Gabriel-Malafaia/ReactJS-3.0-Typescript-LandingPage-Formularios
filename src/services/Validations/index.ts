import * as yup from "yup";

export const validateFormHome = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .max(32, "Deve ter no máximo 32 letras."),
  email: yup
    .string()
    .email("Email inválido!")
    .required("Email obrigatório!")
    .max(64, "Deve ter no máximo 64 letras."),
  cpf: yup
    .string()
    .required("CPF obrigatório!")
    .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/, "CPF Inválido!"),
  cellphone: yup
    .string()
    .required("Telefone obrigatório!")
    .matches(/(\(\d{2}\)\s)(\d{4,5}\-\d{4})/g, "Telefone inválido!"),
  country: yup.string().required("País obrigatório!"),
  city: yup.string().required("Cidade obrigatória!"),
});
