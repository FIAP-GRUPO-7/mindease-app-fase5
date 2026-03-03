import { CognitiveSettings } from "../entities/CognitiveSettings";
import { CognitiveSettingsRepository } from "../repositories/CognitiveSettingsRepository";

export class UpdateCognitiveSettingsUseCase {
  constructor(private repository: CognitiveSettingsRepository) {}

  async execute(settings: CognitiveSettings) {
    await this.repository.save(settings);
  }
}
