import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHeader } from "../FormHeader";
import {
  FormHomePageContent,
  FormHomePageContainer,
  FormHomePage,
  StyledInput,
} from "./styles";
import { validateFormHome } from "../../../services/Validations";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText, IconButton, Tooltip } from "@mui/material";
import { useContextHome } from "../../../context/Home";
import { useEffect } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export interface IHomeForm {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  country: string;
  city: string;
}

export const HomeForm = () => {
  const {
    country,
    setActualCountry,
    actualCities,
    actualCountry,
    whenHandleSubmit,
  } = useContextHome();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    resetField,
  } = useForm<IHomeForm>({ resolver: yupResolver(validateFormHome) });

  useEffect(() => {
    setActualCountry(getValues("country"));
    resetField("city");
  }, [watch().country]);

  return (
    <FormHomePageContainer>
      <FormHomePageContent>
        <FormHeader />

        <FormHomePage onSubmit={handleSubmit(whenHandleSubmit)}>
          <TextField
            {...register("name")}
            id="outlined-basic"
            label="Nome *"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            {...register("email")}
            id="outlined-basic"
            label="Email *"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <FormControl error={!!errors.cellphone}>
            <StyledInput
              {...register("cellphone")}
              error={!!errors.cellphone ? "true" : "false"}
              placeholder="Telefone *"
              mask={"(99) 99999-9999"}
            />
            <FormHelperText>{errors.cellphone?.message}</FormHelperText>
            <Tooltip
              className="tooltip"
              title="Telefone deve estar no formato: (11) 11111-1111"
            >
              <IconButton>
                <QuestionMarkIcon />
              </IconButton>
            </Tooltip>
          </FormControl>

          <FormControl error={!!errors.cpf}>
            <StyledInput
              error={!!errors.cpf ? "true" : "false"}
              {...register("cpf")}
              placeholder="CPF *"
              mask={"999.999.999-99"}
            />
            <FormHelperText>{errors.cpf?.message}</FormHelperText>
            <Tooltip
              className="tooltip"
              title="CPF: Deve estar no formato: 111.111.111-11"
            >
              <IconButton>
                <QuestionMarkIcon />
              </IconButton>
            </Tooltip>
          </FormControl>

          <FormControl fullWidth error={!!errors.country}>
            <InputLabel id="country">País *</InputLabel>
            <Select
              {...register("country")}
              labelId="country"
              id="country"
              label="País *"
              defaultValue=""
            >
              {country.map(({ code, name_ptbr }) => {
                return (
                  <MenuItem key={code} value={code}>
                    {name_ptbr}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{errors.country?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={!!errors.city}>
            <InputLabel id="city">Cidade *</InputLabel>
            <Select
              {...register("city")}
              labelId="city"
              id="city"
              label="Cidade *"
              defaultValue=""
              disabled={actualCities.length <= 0}
            >
              {actualCities &&
                actualCities.map(({ name_ptbr, code, country_code }) => {
                  return (
                    <MenuItem
                      key={code}
                      value={`${name_ptbr} - ${country_code}`}
                    >
                      {name_ptbr}
                    </MenuItem>
                  );
                })}
            </Select>
            <FormHelperText>{errors.city?.message}</FormHelperText>
            <FormHelperText>
              {!errors.city &&
                actualCountry &&
                actualCities.length <= 0 &&
                "Nenhuma cidade encontrada!"}
            </FormHelperText>
          </FormControl>

          <Button
            className="send__button"
            type="submit"
            variant="contained"
            disableElevation
          >
            Enviar
          </Button>
        </FormHomePage>
      </FormHomePageContent>
    </FormHomePageContainer>
  );
};
