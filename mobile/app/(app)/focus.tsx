import { useFocus } from "@/application/focus/FocusContext";
import { FocusArea } from "@/domain/entities/FocusArea";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { SelectableOption } from "@/presentation/components/molecules/SelectableOption";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Focus() {
  const { theme } = useTheme();
  const { addFocus } = useFocus();

  const [selected, setSelected] = useState<FocusArea[]>([]);

  const toggleSelection = (area: FocusArea) => {
    setSelected((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area],
    );
  };

  const handleContinue = async () => {
    if (selected.length === 0) return;

    await Promise.all(selected.map((area) => addFocus(area)));
    router.replace("/(app)/BreathingIntro");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.content}>
        <Title>Do que você precisa?</Title>
        <Subtitle>Escolha as áreas que deseja priorizar agora.</Subtitle>

        <SelectableOption
          label="Clareza"
          selected={selected.includes("clarity")}
          onPress={() => toggleSelection("clarity")}
        />

        <SelectableOption
          label="Foco"
          selected={selected.includes("focus")}
          onPress={() => toggleSelection("focus")}
        />

        <SelectableOption
          label="Calma"
          selected={selected.includes("calm")}
          onPress={() => toggleSelection("calm")}
        />

        <Button
          title="Continuar"
          onPress={handleContinue}
          disabled={selected.length === 0}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
});
