import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  error?: boolean;
};

export default function Input({ style, error, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <TextInput
      placeholderTextColor={theme.textSecondary}
      style={[
        styles.input,
        {
          backgroundColor: theme.surface,
          borderColor: error ? "#D9534F" : theme.border,
          color: theme.textPrimary,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
  },
});
