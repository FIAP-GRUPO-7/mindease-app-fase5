import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const { settings } = useCognitive();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: settings.reducedAnimations ? "none" : "slide_from_right",
      }}
    />
  );
}
