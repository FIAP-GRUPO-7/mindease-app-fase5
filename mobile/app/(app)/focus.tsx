import { useEmotional } from "@/application/emotional/EmotionalContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { EmotionalType } from "@/domain/entities/EmotionalState";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { ThemeToggleButton } from "@/presentation/components/atoms/ThemeToggleButton";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";
import { SelectableCard } from "@/presentation/components/molecules/SelectableCard";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function CheckIn() {
  const { theme } = useTheme();
  const router = useRouter();
  const [selected, setSelected] = useState<EmotionalType | null>(null);

  const { setState } = useEmotional();
  const { settings } = useCognitive();

  const handleContinue = async () => {
    if (!selected) return;
    await setState(selected);
    router.push("/(app)/focus");
  };

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <ResponsiveContainer>
        <ProgressIndicator
          current={1}
          total={3}
          type={settings.progressType}
          style={{ marginTop: 20 }}
        />

        <View style={styles.themeButton}>
          <ThemeToggleButton />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Title>Como você está agora?</Title>
            <Subtitle>Escolha a opção que mais combina com você agora.</Subtitle>
          </View>

          <SelectableCard
            label="Ansiedade"
            selected={selected === "anxious"}
            onPress={() => setSelected("anxious")}
          />

          <SelectableCard
            label="Distração"
            selected={selected === "distracted"}
            onPress={() => setSelected("distracted")}
          />

          <SelectableCard
            label="Sobrecarga"
            selected={selected === "overwhelmed"}
            onPress={() => setSelected("overwhelmed")}
          />

          <Button
            title="Continuar"
            onPress={handleContinue}
            disabled={!selected}
            style={{ marginTop: 16 }}
          />
        </View>
      </ResponsiveContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  themeButton: {
    position: "absolute",
    top: 60,
    right: 24,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },
  header: {
    marginBottom: 40,
  },
});