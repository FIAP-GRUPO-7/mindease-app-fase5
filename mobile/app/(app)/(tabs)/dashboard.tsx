import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  const isFocusMode = settings.focusMode;

  const fadeAnim = useRef(new Animated.Value(isFocusMode ? 1 : 0)).current;

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    Animated.timing(fadeAnim, {
      toValue: isFocusMode ? 1 : 0,
      duration: settings.reducedAnimations ? 0 : 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isFocusMode, settings.reducedAnimations]);

  const onStartFocusSession = () => {
    router.replace("/checkin");
  };

  const supportOpacity = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const cardScale = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.02],
  });

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]}
    >
      <ResponsiveContainer>
        <View
          style={[
            styles.content,
            (isLow || isFocusMode) && styles.centeredContent,
          ]}
        >
          {!isLow && !isFocusMode && <Title>Olá, {user?.name}</Title>}

          {!isFocusMode && isHigh && state && (
            <Subtitle style={styles.emotionText}>
              {emotionalMessage[state.type]}
            </Subtitle>
          )}

          <Animated.View
            style={[
              styles.primaryCard,
              {
                backgroundColor: theme.card,
                borderColor: isFocusMode ? theme.active : theme.border,
                transform: [{ scale: cardScale }],
              },
            ]}
          >
            <Title>Sessão de foco</Title>

            {!isLow && !isFocusMode && <Subtitle>Pronto para começar?</Subtitle>}

            {isFocusMode && (
              <View style={styles.focusInfo}>
                <Subtitle
                  style={[
                    styles.focusLabel,
                    {
                      color: theme.active,
                    },
                  ]}
                >
                  Menos distrações
                </Subtitle>

                <Subtitle style={styles.focusSubtitle}>
                  Interface reduzida para concentração.
                </Subtitle>
              </View>
            )}

            <Button
              title="Iniciar agora"
              style={styles.startButton}
              onPress={onStartFocusSession}
            />
          </Animated.View>

          {!isFocusMode && !isLow && (
            <Animated.View style={{ opacity: supportOpacity }}>
              <Subtitle style={styles.supportText}>
                Ajuste as preferências em Configurações para personalizar sua
                experiência.
              </Subtitle>
            </Animated.View>
          )}
        </View>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 32,
    gap: 20,
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
  focusInfo: {
    marginTop: 2,
    gap: 2,
  },
  focusLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
  focusSubtitle: {
    opacity: 0.78,
  },
  startButton: {
    marginTop: 16,
  },
  supportText: {
    opacity: 0.65,
  },
});