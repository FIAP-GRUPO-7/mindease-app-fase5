import { User } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(name: string): Promise<User> {
    if (!name.trim()) {
      throw new Error("Name is required");
    }

    return this.authRepository.login(name);
  }
}
