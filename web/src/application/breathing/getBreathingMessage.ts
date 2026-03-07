import type { EmotionalType } from "@/domain/entities/EmotionalState";

export function getBreathingMessage(emotional: EmotionalType) {
  switch (emotional) {
    case "anxious":
      return "Respirar assim pode ajudar a reduzir a ansiedade e desacelerar seu corpo.";
    case "distracted":
      return "Essa prática ajuda a trazer mais presença e foco.";
    case "overwhelmed":
      return "Respirar assim pode ajudar a aliviar a sobrecarga mental.";
    default:
      return "Alguns minutos podem ajudar seu corpo a desacelerar.";
  }
}
