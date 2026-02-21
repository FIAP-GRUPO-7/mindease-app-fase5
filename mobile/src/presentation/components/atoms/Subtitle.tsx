import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type Props = TextProps & {
  children: React.ReactNode;
};

export function Subtitle({ children, style, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <Text
      style={[styles.base, { color: theme.textSecondary }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
});
