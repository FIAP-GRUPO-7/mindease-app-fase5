import { User } from "../entities/User";

export interface AuthRepository {
  login(name: string): Promise<User>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
}
