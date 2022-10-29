import { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IHomeForm } from "../components/HomeForm/Form";
import {ICity,ICountry,IHomeContextProvider,IProviderProps} from "../interface/context";
import { api } from "../services/Api";
import { toastError, toastSuccess } from "../styles/components/Toastify/toast";

export const HomeContext = createContext<IHomeContextProvider>(
  {} as IHomeContextProvider
);

interface ISortArrayProps {
  name_ptbr: string;
  name: string;
}

export const HomeContextProvider = ({ children }: IProviderProps) => {
  const [country, setCountry] = useState<ICountry[]>([]);
  const [city, setCity] = useState<ICity[]>([]);
  const [actualCities, setActualCities] = useState<ICity[]>([]);
  const [countryCodesSelected, setCountryCodesSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const whenHandleSubmit = (data: IHomeForm) => {
    // Função que recebe os dados do usuário pra mandar possívelmente pra um backend
    // console.log(data);

    const cities = data.city;
    const countries = data.country;
    const verify = cities.every((elem) => countries.includes(elem.slice(-2)));

    if (verify) {
      toastSuccess("Bem vindo à Ally!");

      setTimeout(() => {
        window.open("https://allyhub.co/");
      }, 2000);

      return;
    }

    toastError("Cidades precisam pertencer aos respectivos países.");
  };

  const sortArray = (array: any) => {
    const arrayOrganized = array.sort(
      (a: ISortArrayProps, b: ISortArrayProps) => {
        const x = a.name_ptbr.toLowerCase();
        const y = b.name_ptbr.toLowerCase();

        return x == y ? 0 : x > y ? 1 : -1;
      }
    );

    return arrayOrganized;
  };

  useEffect(() => {
    api("/country")
      .then((res: AxiosResponse<ICountry[]>) => {
        const countryApi = res.data;
        setCountry(sortArray(countryApi));
        setOpen(true);
      })
      .catch((err) => console.log(err));

    api("/city")
      .then((res: AxiosResponse<ICity[]>) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const actualCitiesFilter = city.filter(({ country_code, name_ptbr }) => {
      const verifyCities = countryCodesSelected.some(
        (elem) => elem == country_code && name_ptbr);

      return verifyCities;
    });

    setOpen(true);
    setActualCities(sortArray(actualCitiesFilter));
  }, [countryCodesSelected]);

  return (
    <HomeContext.Provider
      value={{
        country,
        city,
        actualCities,
        whenHandleSubmit,
        countryCodesSelected,
        setCountryCodesSelected,
        open,
        setOpen,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useContextHome = () => {
  return useContext(HomeContext);
};
