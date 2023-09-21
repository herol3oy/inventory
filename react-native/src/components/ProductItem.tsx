import { Text } from "react-native";

interface ProductItemProps {
  productName: string;
  productImage: string;
  productPosted: string;
  productCategories: string;
}

export const ProductItem = (props: ProductItemProps) => {
  return <Text>{JSON.stringify(props, null, 2)}</Text>;
};
