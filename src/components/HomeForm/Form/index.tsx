import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHeader } from "../FormHeader";
import {FormHomePageContent,FormHomePageContainer,FormHomePage} from "./styles";
import { validateFormHome } from "../../../services/Validations";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText } from "@mui/material";

interface IHomeForm {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  country: string;
  city: string;
}

export const HomeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IHomeForm>({ resolver: yupResolver(validateFormHome) });

  const whenHandleSubmit = (data: IHomeForm) => {
    console.log(data);
  };

  return (
    <FormHomePageContainer>
      <FormHomePageContent>
        <FormHeader />

        <FormHomePage onSubmit={handleSubmit(whenHandleSubmit)}>
          <TextField
            {...register("name")}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            {...register("email")}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("cellphone")}
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            error={!!errors.cellphone}
            helperText={errors.cellphone?.message}
          />

          <TextField
            {...register("cpf")}
            id="outlined-basic"
            label="Cpf"
            variant="outlined"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
          />

          <FormControl fullWidth error={!!errors.country}>
            <InputLabel id="country">País</InputLabel>
            <Select
              {...register("country")}
              labelId="country"
              id="country"
              label="País"
              defaultValue=""
            >
              <MenuItem value={"10"}>Brasil</MenuItem>
              <MenuItem value={"20"}>Eua</MenuItem>
              <MenuItem value={"30"}>China</MenuItem>
            </Select>
            <FormHelperText>{errors.country?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={!!errors.city}>
            <InputLabel id="city">Cidade</InputLabel>
            <Select
              {...register("city")}
              labelId="city"
              id="city"
              label="Cidade"
              defaultValue=""
            >
              <MenuItem value={"40"}>Rio</MenuItem>
              <MenuItem value={"50"}>New York</MenuItem>
              <MenuItem value={"60"}>Xangai</MenuItem>
            </Select>
            <FormHelperText>{errors.city?.message}</FormHelperText>
          </FormControl>

          <Button type="submit" variant="contained" disableElevation>
            Enviar
          </Button>
        </FormHomePage>
      </FormHomePageContent>
    </FormHomePageContainer>
  );
};
