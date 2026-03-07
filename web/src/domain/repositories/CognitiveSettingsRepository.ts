import type { CognitiveSettings } from "../entities/CognitiveSettings";

export interface CognitiveSettingsRepository {
  get(): Promise<CognitiveSettings>;
  save(settings: CognitiveSettings): Promise<void>;
}
