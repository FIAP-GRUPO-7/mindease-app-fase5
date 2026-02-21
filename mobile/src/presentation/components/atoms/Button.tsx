import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "./Text";

type Variant = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: Variant;
};

export default function Button({
  title,
  variant = "primary",
  style,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const backgroundColor =
    variant === "primary" ? theme.buttonPrimary : theme.optionBackground;

  const textColor =
    variant === "primary" ? theme.buttonText : theme.textPrimary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text weight="600" style={{ color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
