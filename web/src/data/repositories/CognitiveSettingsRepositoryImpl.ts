import type { CognitiveSettings } from "@/domain/entities/CognitiveSettings";
import type { CognitiveSettingsRepository } from "@/domain/repositories/CognitiveSettingsRepository";

const STORAGE_KEY = "mindease_cognitive_settings";

const defaultSettings: CognitiveSettings = {
  complexity: "medium",
  focusMode: false,
  reducedAnimations: false,
  progressType: "dots",
};

export class CognitiveSettingsRepositoryImpl implements CognitiveSettingsRepository {
  async get(): Promise<CognitiveSettings> {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return defaultSettings;

    return JSON.parse(data);
  }

  async save(settings: CognitiveSettings): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }
}