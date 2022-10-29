import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHeader } from "../FormHeader";
import {FormHomePageContent,FormHomePageContainer,FormHomePage,StyledInput} from "./styles";
import {Autocomplete,Button,FormHelperText,IconButton,Tooltip} from "@mui/material";
import { useContextHome } from "../../../context/Home";
import { validateFormHome } from "../../../services/Validations";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

export interface IHomeForm {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  country: string[];
  city: string[];
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const HomeForm = () => {
  const {
    whenHandleSubmit,
    country,
    actualCities,
    setCountryCodesSelected,
    open,
  } = useContextHome();
  const loading = open && country.length === 0;

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IHomeForm>({ resolver: yupResolver(validateFormHome) });

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

          <Controller
            name="country"
            control={control}
            render={({ field: { value, onChange, ...rest } }) => (
              <Autocomplete
                onChange={(event, newValue) => {
                  const countryCodes = newValue.map((elem) => elem.code);
                  const countryCodesName = newValue.map(
                    (elem) => `${elem.code}`
                  );
                  setCountryCodesSelected(countryCodes);
                  onChange(countryCodesName);
                }}
                fullWidth
                multiple
                limitTags={3}
                id="checkboxes-tags-demo"
                options={country}
                loading={loading}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name_ptbr}
                renderOption={(props, option, { selected }) => {
                  return (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.name_ptbr}
                    </li>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    error={!!errors.country}
                    {...params}
                    label="Países de Interesse"
                    placeholder="Favoritos"
                    helperText={errors.country?.message}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            )}
          />

          <Controller
            name="city"
            control={control}
            defaultValue={[]}
            render={({ field: { value, onChange, ...rest } }) => (
              <Autocomplete
                onChange={(event, newValue) => {
                  const citiesCodes = newValue.map(
                    (elem) => `${elem.name_ptbr} - ${elem.country_code}`
                  );
                  onChange(citiesCodes);
                }}
                fullWidth
                multiple
                limitTags={3}
                id="checkboxes-tags-demo"
                options={actualCities}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name_ptbr}
                renderOption={(props, option, { selected }) => {
                  return (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.name_ptbr}
                    </li>
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    error={!!errors.city}
                    {...params}
                    label="Cidades de Interesse"
                    placeholder="Favoritos"
                    helperText={errors.city?.message}
                  />
                )}
              />
            )}
          />

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
