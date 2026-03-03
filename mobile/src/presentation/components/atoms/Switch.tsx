import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { Switch as RNSwitch, ViewStyle } from "react-native";

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export function Switch({
  value,
  onValueChange,
  disabled = false,
  style,
}: Props) {
  const { theme } = useTheme();

  const isDark = theme.background === "#14110F";

  const trackColorFalse = isDark ? "#5A524C" : theme.border;
  const trackColorTrue = theme.buttonPrimary;

  const thumbColor = isDark ? "#FFFFFF" : theme.surface;

  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      style={style}
      trackColor={{
        false: trackColorFalse,
        true: trackColorTrue,
      }}
      thumbColor={thumbColor}
      ios_backgroundColor={trackColorFalse}
    />
  );
}
