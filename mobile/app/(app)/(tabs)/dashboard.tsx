import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { state } = useEmotional();
  const { settings } = useCognitive();

  const emotionalMessage = {
    anxious: "Vamos respirar juntos para acalmar a mente.",
    distracted: "Vamos fazer uma pausa para recarregar o foco.",
    overwhelmed: "Vamos focar em uma coisa de cada vez.",
  };

  const isLow = settings.complexity === "low";
  const isHigh = settings.complexity === "high";

  const onStartFocusSession = () => {
    router.replace("/(app)/checkin");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]}
    >
      <View style={[styles.content, isLow && styles.centeredContent]}>
        {!isLow && <Title>Olá, {user?.name}</Title>}

        {isHigh && state && (
          <Subtitle style={styles.emotionText}>
            {emotionalMessage[state.type]}
          </Subtitle>
        )}

        <View
          style={[
            styles.primaryCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Title>Sessão de foco</Title>

          {!isLow && <Subtitle>Pronto para começar?</Subtitle>}

          <Button
            title="Iniciar agora"
            style={{ marginTop: 16 }}
            onPress={onStartFocusSession}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 20,
    marginTop: 60,
  },
  centeredContent: {
    justifyContent: "center",
  },
  emotionText: {
    opacity: 0.8,
  },
  primaryCard: {
    padding: 28,
    borderRadius: 24,
    gap: 12,
    borderWidth: 1,
  },
});
