import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export function Switch({ value, onValueChange, disabled = false, style }: Props) {
  const { theme } = useTheme();

  const trackBg = value ? theme.buttonPrimary : theme.border;
  const thumbBg = "#FFFFFF";

  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      style={[styles.wrap, style, disabled && { opacity: 0.6 }]}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <View style={[styles.track, { backgroundColor: trackBg }]}>
        <View
          style={[
            styles.thumb,
            { backgroundColor: thumbBg },
            value ? styles.thumbOn : styles.thumbOff,
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  track: {
    width: 46,
    height: 26,
    borderRadius: 999,
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 999,
  },
  thumbOff: {
    alignSelf: "flex-start",
  },
  thumbOn: {
    alignSelf: "flex-end",
  },
});