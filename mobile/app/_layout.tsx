import { AuthProvider } from "@/application/auth/AuthContext";
import { CognitiveProvider } from "@/application/cognitive/CognitiveContext";
import { EmotionalProvider } from "@/application/emotional/EmotionalContext";
import { ThemeProvider, useTheme } from "@/presentation/theme/ThemeContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

function AppLayout() {
  const { theme } = useTheme();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.background);
  }, [theme]);

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <EmotionalProvider>
          <CognitiveProvider>
            <AppLayout />
          </CognitiveProvider>
        </EmotionalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
