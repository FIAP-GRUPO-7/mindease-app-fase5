export type ComplexityLevel = "low" | "medium" | "high";

export interface CognitiveSettings {
  complexity: ComplexityLevel;
  focusMode: boolean;
  reducedAnimations: boolean;
}
