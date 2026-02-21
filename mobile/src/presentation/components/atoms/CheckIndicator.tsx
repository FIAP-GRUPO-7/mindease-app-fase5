import { useTheme } from "@/presentation/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  size?: number;
};

export function CheckIndicator({ size = 80 }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: theme.optionBackground,
        },
      ]}
    >
      <Ionicons name="checkmark" size={size * 0.5} color={theme.textPrimary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
