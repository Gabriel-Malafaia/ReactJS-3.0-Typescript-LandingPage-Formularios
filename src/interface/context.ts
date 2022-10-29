import { ReactNode } from "react";
import { IHomeForm } from "../components/HomeForm/Form";

export interface IHomeContextProvider {
  country: ICountry[];
  city: ICity[];
  actualCities: ICity[];
  whenHandleSubmit: (data: IHomeForm) => void;
  countryCodesSelected: string[];
  setCountryCodesSelected: React.Dispatch<React.SetStateAction<string[]>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface ICountry {
  code: string;
  name: string;
  name_ptbr: string;
}

export interface ICity {
  id: number;
  code: string;
  name: string;
  country_code: string;
  created_at: string;
  updated_at: string;
  name_ptbr: string;
  lat: string;
  log: string;
  url1: null | string;
  url2: null | string;
}
