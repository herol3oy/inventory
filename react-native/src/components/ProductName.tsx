import { Text, StyleSheet } from "react-native";

interface ProductNameProps {
  name: string;
}

export const ProductName = ({ name }: ProductNameProps) => {
  return (
    <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
      {name ? name : "No Name!"}
    </Text>
  );
};

const styles = StyleSheet.create({
  productName: {
    color: "#1B2633",
    fontWeight: "900",
    fontSize: 22,
    width: 150
  }
});
