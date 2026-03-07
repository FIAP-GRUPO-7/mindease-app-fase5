import { Outlet } from "react-router-dom";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useTheme } from "@/presentation/theme/ThemeContext";

export default function AuthLayout() {
  const { settings } = useCognitive();
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        minHeight: "100vh",
        transition: settings.reducedAnimations ? "none" : "all 0.2s ease",
      }}
      className="flex items-center justify-center"
    >
      <Outlet />
    </div>
  );
}
