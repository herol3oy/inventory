import { View, StyleSheet } from "react-native";
import { ProductThumbnail } from "./ProductThumbnail";
import { ProductName } from "./ProductName";
import { ProductDate } from "./ProductDate";

interface ProductItemProps {
  productName: string;
  productImage: string;
  productPosted: string;
  productCategories: string;
}

export const ProductItem = ({
  productName,
  productImage,
  productPosted,
  productCategories
}: ProductItemProps) => {
  return (
    <View style={styles.productContainer}>
      <ProductThumbnail productImage={productImage} />
      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetailsHeader}>
          <View>
            <ProductName name={productName} />
            <ProductDate date={productPosted} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#F8F9FC",
    paddingHorizontal: 10,
    borderRadius: 4,
    columnGap: 12,
    padding: 8,
    elevation: 2
  },
  productDetailsContainer: {
    rowGap: 12,
    flex: 1
  },
  productDetailsHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  }
});
