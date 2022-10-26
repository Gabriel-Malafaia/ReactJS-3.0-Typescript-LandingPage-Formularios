import { Text } from "../../styles/components/Typography/styles";
import { Illustration } from "../../components/Illustration";
import { HomeContainer } from "./styles";


export const Home = () => {
  return (
    <HomeContainer>
      <Text tag="h1" fontSize="title1">Hello World</Text>
      <Illustration />
    </HomeContainer>
  );
};
