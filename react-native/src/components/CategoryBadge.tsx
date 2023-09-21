import { Text, StyleSheet } from "react-native";

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return <Text style={styles.categoryBadge}>{category}</Text>;
};

const styles = StyleSheet.create({
  categoryBadge: {
    backgroundColor: "#D4E5FF",
    color: "#1B2633",
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 8
  }
});
