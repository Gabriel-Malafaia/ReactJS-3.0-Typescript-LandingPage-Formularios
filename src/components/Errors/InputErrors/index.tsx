import { Text } from "../../../styles/components/Typography/styles";

interface IInputErrorProps {
  message?: string;
}

export const InputError = ({ message }: IInputErrorProps) => {
  return (
    <Text tag="span" fontSize="text2" color="error">
      {message}
    </Text>
  );
};
