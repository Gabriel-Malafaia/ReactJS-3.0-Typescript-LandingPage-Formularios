import { createContext, useContext, useEffect, useState } from "react";
import { IHomeForm } from "../components/HomeForm/Form";
import {ICity,ICountry,IHomeContextProvider,IProviderProps} from "../interface/context";
import { api } from "../services/Api";
import { toastSuccess } from "../styles/components/Toastify/toast";

export const HomeContext = createContext<IHomeContextProvider>(
  {} as IHomeContextProvider
);

export const HomeContextProvider = ({ children }: IProviderProps) => {
  const [country, setCountry] = useState<ICountry[]>([]);
  const [city, setCity] = useState<ICity[]>([]);
  const [actualCountry, setActualCountry] = useState("");
  const [actualCities, setActualCities] = useState<ICity[]>([]);

  console.log(actualCities)

  const whenHandleSubmit = (data: IHomeForm) => {
    // Função que recebe os dados do usuário pra mandar possívelmente pra um backend
    // console.log(data);

    toastSuccess("Bem vindo à Ally!");

    setTimeout(() => {
      window.open("https://allyhub.co/");
    }, 2000);
  };

  useEffect(() => {
    api("/country")
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));

    api("/city")
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const actualCitiesFilter = city.filter(({ country_code, name_ptbr }) => {
      return (country_code == actualCountry && name_ptbr);
    });

    setActualCities(actualCitiesFilter);
  }, [actualCountry]);

  return (
    <HomeContext.Provider
      value={{
        country,
        city,
        actualCountry,
        setActualCountry,
        actualCities,
        whenHandleSubmit,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useContextHome = () => {
  return useContext(HomeContext);
};
