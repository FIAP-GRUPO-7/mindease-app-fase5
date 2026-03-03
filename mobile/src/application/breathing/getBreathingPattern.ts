import { EmotionalType } from "@/domain/entities/EmotionalState";
import { FocusArea } from "@/domain/entities/FocusArea";

export function getBreathingPattern(
  emotional: EmotionalType,
  focus: FocusArea,
) {
  if (emotional === "anxious") {
    if (focus === "calm") {
      return { inhale: 4000, exhale: 7000, pause: 2500 };
    }
    if (focus === "focus") {
      return { inhale: 4000, exhale: 5000, pause: 1500 };
    }
    return { inhale: 4000, exhale: 6000, pause: 2000 };
  }

  if (emotional === "distracted") {
    if (focus === "focus") {
      return { inhale: 4000, exhale: 4000, pause: 0 };
    }
    if (focus === "calm") {
      return { inhale: 4000, exhale: 6000, pause: 1000 };
    }
    return { inhale: 4000, exhale: 5000, pause: 500 };
  }

  // overwhelmed
  if (focus === "calm") {
    return { inhale: 4000, exhale: 7000, pause: 3000 };
  }
  if (focus === "focus") {
    return { inhale: 4000, exhale: 5000, pause: 1500 };
  }

  return { inhale: 4000, exhale: 6000, pause: 2500 };
}
