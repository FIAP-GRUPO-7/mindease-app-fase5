import { FocusState } from "@/domain/entities/FocusArea";
import { FocusRepository } from "@/domain/repositories/FocusRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@mindease_focus";

export class FocusRepositoryImpl implements FocusRepository {
  async get(): Promise<FocusState[] | null> {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : null;
  }

  async save(state: FocusState | null): Promise<void> {
    if (!state) {
      await AsyncStorage.removeItem(KEY);
      return;
    }
    await AsyncStorage.setItem(KEY, JSON.stringify(state));
  }
}
