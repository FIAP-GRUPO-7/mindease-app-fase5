import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { Text as RNText, TextProps } from "react-native";

type Props = TextProps & {
  size?: number;
  weight?: "400" | "500" | "600" | "700";
  color?: "primary" | "secondary";
  align?: "left" | "center" | "right";
};

export function Text({
  children,
  size = 16,
  weight = "400",
  color = "primary",
  align = "left",
  style,
  ...rest
}: Props) {
  const { theme } = useTheme();

  return (
    <RNText
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          color: color === "primary" ? theme.textPrimary : theme.textSecondary,
          textAlign: align,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}
