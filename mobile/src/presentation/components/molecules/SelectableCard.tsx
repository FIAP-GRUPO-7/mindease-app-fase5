import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../atoms/Text";

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export function SelectableCard({ label, selected = false, onPress }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? theme.optionSelected
            : theme.optionBackground,
          borderColor: theme.border,
        },
      ]}
    >
      <Text size={16} weight="500" align="center">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 22,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
