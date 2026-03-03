import { getBreathingPattern } from "@/application/breathing/getBreathingPattern";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import { useFocus } from "@/application/focus/FocusContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { BreathingOrb } from "@/presentation/components/organisms/BreathingOrb";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BreathingIntro() {
  const { theme } = useTheme();

  const { state: emotionalState } = useEmotional();
  const { state: focusState } = useFocus();

  const emotional = emotionalState?.type;
  const focus = focusState?.[0]?.area;

  const pattern = getBreathingPattern(emotional ?? "anxious", focus ?? "calm");

  const handleContinue = () => {
    router.push("/(app)/SessionComplete");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Title style={styles.title}>Respire com calma</Title>

          <Subtitle style={styles.subtitle}>
            Acompanhe o movimento do círculo enquanto respira.
          </Subtitle>
        </View>

        <View style={styles.orbContainer}>
          <BreathingOrb
            inhaleDuration={pattern.inhale}
            exhaleDuration={pattern.exhale}
            pauseDuration={pattern.pause}
            size={200}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Estou pronto para continuar"
            onPress={handleContinue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  content: {
    flex: 1,
    paddingHorizontal: 48,
    paddingVertical: 60,
    justifyContent: "space-between",
  },

  textContainer: {
    alignItems: "center",
    gap: 8,
    marginTop: 40,
  },

  title: {
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
  },

  benefit: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 14,
  },

  orbContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    paddingBottom: 24,
  },
});
