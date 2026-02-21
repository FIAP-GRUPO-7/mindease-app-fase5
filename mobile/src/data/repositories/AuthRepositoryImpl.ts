import { User } from "@/domain/entities/User";
import { AuthRepository } from "@/domain/repositories/AuthRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "mindease_user";
const SETTINGS_KEY = "mindease_cognitive_settings";

export class AuthRepositoryImpl implements AuthRepository {
  async login(name: string): Promise<User> {
    const user: User = { name };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  async logout(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEY);
    await AsyncStorage.removeItem(SETTINGS_KEY);
  }

  async getCurrentUser(): Promise<User | null> {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  }
}
