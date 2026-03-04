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
  disabled,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const isPrimary = variant === "primary";

  const backgroundColor = disabled
    ? theme.border
    : isPrimary
    ? theme.buttonPrimary
    : theme.optionBackground;

  const textColor = disabled
    ? theme.textSecondary
    : isPrimary
      ? theme.buttonText
      : theme.textPrimary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={0.8}
      disabled={disabled}
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
  disabled: {
    opacity: 0.7,
  },
});
