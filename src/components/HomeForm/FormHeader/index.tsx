import { Text } from "../../../styles/components/Typography/styles";
import { Logo } from "../Logo";
import { FormHeaderStyle } from "./styles";

export const FormHeader = () => {
  return (
    <FormHeaderStyle>
      <Logo />
      <Text tag="span">Seu Hub de Educação!</Text>
    </FormHeaderStyle>
  );
};
