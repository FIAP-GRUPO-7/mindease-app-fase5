import { useFocus } from "@/application/focus/FocusContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { FocusArea } from "@/domain/entities/FocusArea";
import Button from "@/presentation/components/atoms/Button";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { ThemeToggleButton } from "@/presentation/components/atoms/ThemeToggleButton";
import { Title } from "@/presentation/components/atoms/Title";
import { SelectableOption } from "@/presentation/components/molecules/SelectableOption";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Focus() {
  const { theme } = useTheme();
  const { addFocus } = useFocus();
  const { settings } = useCognitive();

  const [selected, setSelected] = useState<FocusArea[]>([]);

  const isFocusMode = settings.focusMode;

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
    router.push("/BreathingIntro");
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.background }]}
    >
      {!isFocusMode && (
        <View style={styles.themeButton}>
          <ThemeToggleButton />
        </View>
      )}

      <ResponsiveContainer>
        {!isFocusMode && (
          <ProgressIndicator
            current={2}
            total={3}
            type={settings.progressType}
            style={{ marginTop: 20 }}
          />
        )}

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
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },

  themeButton: {
    position: "absolute",
    top: 60,
    right: 24,
    zIndex: 10,
  },

  content: {
    flex: 1,
    paddingVertical: 24,
    justifyContent: "center",
    gap: 16,
  },
});