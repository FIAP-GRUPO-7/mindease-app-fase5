export type EmotionalType = "anxious" | "distracted" | "overwhelmed";

export interface EmotionalState {
  type: EmotionalType;
  date: string;
}
