import type { CognitiveSettings } from "../entities/CognitiveSettings";
import type { EmotionalState } from "../entities/EmotionalState";

export function adaptCognitiveSettings(
  base: CognitiveSettings,
  emotional: EmotionalState | null,
): CognitiveSettings {
  if (!emotional) return base;

  if (emotional.type === "overwhelmed") {
    return {
      ...base,
      complexity: "low",
      focusMode: true,
      reducedAnimations: true,
    };
  }

  return base;
}
