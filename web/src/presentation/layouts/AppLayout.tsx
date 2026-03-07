import { Outlet } from "react-router-dom";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEffect } from "react";

export default function AppLayout() {
  const { theme } = useTheme();
  const { settings } = useCognitive();

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme]);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        minHeight: "100vh",
        transition: settings.reducedAnimations ? "none" : "all 0.2s ease",
      }}
    >
      <Outlet />
    </div>
  );
}
