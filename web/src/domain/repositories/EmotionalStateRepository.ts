import type { EmotionalState } from "../entities/EmotionalState";

export interface EmotionalStateRepository {
  get(): Promise<EmotionalState | null>;
  save(state: EmotionalState): Promise<void>;
}
