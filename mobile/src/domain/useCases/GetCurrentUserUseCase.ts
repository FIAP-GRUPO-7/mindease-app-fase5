import { User } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export class GetCurrentUserUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<User | null> {
    return this.authRepository.getCurrentUser();
  }
}
