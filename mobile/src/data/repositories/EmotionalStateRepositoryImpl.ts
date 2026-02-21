import { EmotionalState } from "@/domain/entities/EmotionalState";
import { EmotionalStateRepository } from "@/domain/repositories/EmotionalStateRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "mindease_emotional_state";

export class EmotionalStateRepositoryImpl implements EmotionalStateRepository {
  async get(): Promise<EmotionalState | null> {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  }

  async save(state: EmotionalState): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}
