import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const ProductsContainer = ({ children }: PropsWithChildren) => {
  return <View style={styles.productContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  productContainer: {
    rowGap: 12,
    paddingHorizontal: 16
  }
});
