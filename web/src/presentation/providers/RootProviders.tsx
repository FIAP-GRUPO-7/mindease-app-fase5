import { AuthProvider } from "@/application/auth/AuthContext";
import { CognitiveProvider } from "@/application/cognitive/CognitiveContext";
import { EmotionalProvider } from "@/application/emotional/EmotionalContext";
import { FocusProvider } from "@/application/focus/FocusContext";
import { TaskProvider } from "@/application/tasks/TaskContext";
import { ThemeProvider } from "@/presentation/theme/ThemeContext";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <EmotionalProvider>
          <CognitiveProvider>
            <FocusProvider>
              <TaskProvider>{children}</TaskProvider>
            </FocusProvider>
          </CognitiveProvider>
        </EmotionalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
