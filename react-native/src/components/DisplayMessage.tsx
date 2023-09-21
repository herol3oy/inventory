import { Text } from "react-native";

interface DisplayMessageProps {
  message: string;
}

export const DisplayMessage = ({ message }: DisplayMessageProps) => {
  return <Text>{message}</Text>;
};
