import { CognitiveSettingsRepository } from "../repositories/CognitiveSettingsRepository";

export class GetCognitiveSettingsUseCase {
  constructor(private repository: CognitiveSettingsRepository) {}

  async execute() {
    return this.repository.get();
  }
}
