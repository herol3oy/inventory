import { Text, StyleSheet } from "react-native";
import { formatDate } from "../utils/format-date";

interface ProductDateProps {
  date: string;
}

export const ProductDate = ({ date }: ProductDateProps) => {
  return <Text style={styles.productDate}>{formatDate(date)}</Text>;
};

const styles = StyleSheet.create({
  productDate: {
    color: "#1B2633"
  }
});
