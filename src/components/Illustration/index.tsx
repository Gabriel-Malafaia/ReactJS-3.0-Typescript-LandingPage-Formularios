import { IllustrationContainer } from "./styles";
import IllustrationImage from '../../assets/Illustration.png'

export const Illustration = () => {
  return (
    <IllustrationContainer>
      <img src={IllustrationImage} alt="Illustration Page" />
    </IllustrationContainer>
  );
};
