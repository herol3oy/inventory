import { View, Text, StyleSheet } from "react-native";

interface ProductBadgeProps {
  name: string;
}

export const ProductBadge = ({ name }: ProductBadgeProps) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: "flex-start",
    backgroundColor: "#333333",
    borderRadius: 9,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderTopRightRadius: 0
  },
  badgeText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});
