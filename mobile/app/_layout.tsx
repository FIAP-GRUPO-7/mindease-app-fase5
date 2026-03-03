import { AuthProvider } from "@/application/auth/AuthContext";
import { CognitiveProvider } from "@/application/cognitive/CognitiveContext";
import { EmotionalProvider } from "@/application/emotional/EmotionalContext";
import { FocusProvider } from "@/application/focus/FocusContext";
import { TaskProvider } from "@/application/tasks/TaskContext";
import { darkTheme } from "@/presentation/theme/theme";
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

  const isDark = theme.background === darkTheme.background;

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
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
            <FocusProvider>
              <TaskProvider>
                <AppLayout />
              </TaskProvider>
            </FocusProvider>
          </CognitiveProvider>
        </EmotionalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
