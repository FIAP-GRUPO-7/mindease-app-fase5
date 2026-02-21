export type EmotionalType = "calm" | "neutral" | "overwhelmed";

export interface EmotionalState {
  type: EmotionalType;
  date: string;
}
