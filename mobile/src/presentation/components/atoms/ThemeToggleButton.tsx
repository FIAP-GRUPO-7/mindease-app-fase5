import { useTheme } from "@/presentation/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export function ThemeToggleButton() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.card }]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={22}
        color={theme.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
