import { StyleSheet, Image } from "react-native";

interface ChevronArrowImageProps {
  isCategoryOpen: boolean;
}

export const ChevronArrowImage = ({
  isCategoryOpen
}: ChevronArrowImageProps) => {
  return (
    <Image
      style={[
        styles.chevronArrow,
        {
          transform: [{ rotate: isCategoryOpen ? "180deg" : "0deg" }]
        }
      ]}
      source={require("../../assets/inventory-chevron-up.png")}
    />
  );
};

const styles = StyleSheet.create({
  chevronArrow: {
    width: 24,
    height: 24
  }
});
