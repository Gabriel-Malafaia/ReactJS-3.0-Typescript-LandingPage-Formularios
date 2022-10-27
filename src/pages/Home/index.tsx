import { Illustration } from "../../components/Illustration";
import { HomeContainer } from "./styles";
import { HomeForm } from "../../components/HomeForm/Form";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeForm />
      <Illustration />
    </HomeContainer>
  );
};
