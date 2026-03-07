import type { EmotionalState } from "@/domain/entities/EmotionalState";
import type { EmotionalStateRepository } from "@/domain/repositories/EmotionalStateRepository";

const STORAGE_KEY = "mindease_emotional_state";

export class EmotionalStateRepositoryImpl implements EmotionalStateRepository {
  async get(): Promise<EmotionalState | null> {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    return JSON.parse(data);
  }

  async save(state: EmotionalState): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}