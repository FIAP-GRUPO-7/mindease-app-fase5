import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { state } = useEmotional();
  const { settings } = useCognitive();

  const emotionalMessage = {
    calm: "Ótimo momento para avançar.",
    neutral: "Vamos seguir com tranquilidade.",
    overwhelmed: "Vamos focar em uma coisa de cada vez.",
  };

  const showGreeting = settings.complexity !== "low";
  const showEmotion = settings.complexity === "high" && state;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]}
    >
      <View style={styles.content}>
        {showGreeting && <Title>Olá, {user?.name}</Title>}

        {showEmotion && <Subtitle>{emotionalMessage[state!.type]}</Subtitle>}

        <View style={[styles.primaryCard, { backgroundColor: theme.surface }]}>
          <Title style={{ fontSize: 20 }}>Sessão de foco</Title>

          {settings.complexity !== "low" && (
            <Subtitle>
              {settings.focusMode
                ? "Modo foco ativado."
                : "Pronto para começar?"}
            </Subtitle>
          )}

          <Button title="Iniciar agora" style={{ marginTop: 12 }} />
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
    paddingTop: 100,
    gap: 24,
  },
  primaryCard: {
    padding: 24,
    borderRadius: 20,
    gap: 10,
  },
});
