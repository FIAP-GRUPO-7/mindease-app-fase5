import type { User } from "@/domain/entities/User";
import type { AuthRepository } from "@/domain/repositories/AuthRepository";

const STORAGE_KEY = "mindease_user";
const SETTINGS_KEY = "mindease_cognitive_settings";

export class AuthRepositoryImpl implements AuthRepository {
  async login(name: string): Promise<User> {
    const user: User = { name };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

    return user;
  }

  async logout(): Promise<void> {
    console.log("Logging out, clearing user and settings from storage");

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SETTINGS_KEY);
  }

  async getCurrentUser(): Promise<User | null> {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    return JSON.parse(data);
  }
}