import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ProductThumbnail } from "./ProductThumbnail";
import { ProductName } from "./ProductName";
import { ProductDate } from "./ProductDate";
import { calculateProductIsNew } from "../utils/calculate-product-is-new";
import { ProductBadge } from "./ProductBadge";
import { ChevronArrowImage } from "./ChevronArrowImage";

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
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(true);

  const isProductNew: boolean = calculateProductIsNew(productPosted);

  const handleCategoryToggle = () => {
    setIsCategoryOpen((open) => !open);
  };

  return (
    <View style={styles.productContainer}>
      <ProductThumbnail productImage={productImage} />
      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetailsHeader}>
          <View>
            <ProductName name={productName} />
            <ProductDate date={productPosted} />
          </View>
          <View style={styles.badgeContainer}>
            {isProductNew && <ProductBadge name="New" />}
            <TouchableWithoutFeedback onPress={handleCategoryToggle}>
              <ChevronArrowImage isCategoryOpen={isCategoryOpen} />
            </TouchableWithoutFeedback>
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
  },
  badgeContainer: {
    flexDirection: "row",
    columnGap: 12
  }
});
