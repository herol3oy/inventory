import { StyleSheet, Image } from "react-native";

export const ProductThumbnail = ({
  productImage
}: {
  productImage: string;
}) => {
  return (
    <Image
      style={[styles.productImage, !productImage && { height: 113 }]}
      source={
        productImage
          ? { uri: productImage }
          : require("../../assets/inventory-product-placeholder.png")
      }
    />
  );
};

const styles = StyleSheet.create({
  productImage: {
    resizeMode: "contain",
    width: 85
  }
});
