import React from "react";
import { View, StyleSheet } from "react-native";
import { ViewStyle } from "react-native";
import { useTheme } from "@/presentation/theme/ThemeContext";

type ProgressIndicatorProps = {
  current: number;
  total: number;
  style?: ViewStyle;
  type?: "bar" | "dots";
};

export function ProgressIndicator({
  current,
  total,
  style,
  type = "bar",
}: ProgressIndicatorProps) {
  const { theme } = useTheme();
  const progress = Math.min(current / total, 1);
  const activeColor = theme.active;
  const inactiveColor = theme.inactive;

  if (type === "dots") {
    return (
      <View style={[styles.dotsContainer, style]}>
        {Array.from({ length: total }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: inactiveColor },
              index < current && { backgroundColor: activeColor },
            ]}
          ></View>
        ))}
      </View>
    );
  }

  return (
    <View
      style={[styles.barContainer, style, { backgroundColor: inactiveColor }]}
    >
      <View
        style={[
          styles.bar,
          { width: `${progress * 100}%`, backgroundColor: activeColor },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    height: 10,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
