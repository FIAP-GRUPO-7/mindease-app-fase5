import { CognitiveSettings } from "@/domain/entities/CognitiveSettings";
import { CognitiveSettingsRepository } from "@/domain/repositories/CognitiveSettingsRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "mindease_cognitive_settings";

const defaultSettings: CognitiveSettings = {
  complexity: "medium",
  focusMode: false,
  reducedAnimations: false,
};

export class CognitiveSettingsRepositoryImpl implements CognitiveSettingsRepository {
  async get(): Promise<CognitiveSettings> {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) return defaultSettings;
    return JSON.parse(data);
  }

  async save(settings: CognitiveSettings): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }
}
