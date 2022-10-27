import * as yup from "yup";


export const validateFormHome = yup.object().shape({
  name: yup
    .string()
    .required("Nome Obrigatório")
    .max(32, "Deve ter no máximo 32 letras."),
  email: yup
    .string()
    .required("Email obrigatório!")
    .max(64, "Deve ter no máximo 64 letras."),
  cpf: yup
    .string()
    .required("Telefone obrigatório!")
    .max(11, "Máximo de 11 Números"),
  cellphone: yup
    .string()
    .required("Telefone obrigatório!")
    .max(15, "Máximo de 12 Números"),
  country: yup.string().required("País obrigatório!"),
  city: yup.string().required("Cidade obrigatória!"),
});
