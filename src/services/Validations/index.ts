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
    .required("Cpf obrigatório!")
    .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/, "Cpf Inválido!"),
  cellphone: yup
    .string()
    .required("Telefone obrigatório!")
    .min(11, "Deve conter no mínimo 11 Números.")
    .max(16, "Máximo de 16 Números"),
  country: yup.string().required("País obrigatório!"),
  city: yup.string().required("Cidade obrigatória!"),
});
