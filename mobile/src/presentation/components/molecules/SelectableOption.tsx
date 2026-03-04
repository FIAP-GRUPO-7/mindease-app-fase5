import { useTheme } from "@/presentation/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../atoms/Text";

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export function SelectableOption({ label, selected = false, onPress }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: theme.optionBackground,
          borderColor: selected ? theme.active : theme.border,
        },
      ]}
    >
      <View style={styles.left}>
        {selected ? (
          <View
            style={[
              styles.selectedCircle,
              { backgroundColor: theme.active },
            ]}
          >
            <Ionicons name="checkmark" size={16} color={theme.background} />
          </View>
        ) : (
          <View style={[styles.circle, { borderColor: theme.border }]} />
        )}

        <Text size={16} weight="500" style={{ marginLeft: 14 }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 16,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
  },
  selectedCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});
