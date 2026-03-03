import Button from "@/presentation/components/atoms/Button";
import { CheckIndicator } from "@/presentation/components/atoms/CheckIndicator";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SessionComplete() {
  const { theme } = useTheme();

  const handleReturn = () => {
    router.replace("/(app)/dashboard");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.content}>
        <View style={styles.centerContent}>
          <CheckIndicator size={90} />

          <Title style={styles.title}>Muito bem</Title>

          <Subtitle style={styles.subtitle}>
            Você concluiu esta sessão. Leve esse momento de calma com você ao
            longo do dia.
          </Subtitle>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Voltar ao início" onPress={handleReturn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },

  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },

  title: {
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.7,
    paddingHorizontal: 16,
  },

  buttonContainer: {
    paddingBottom: 24,
  },
});
