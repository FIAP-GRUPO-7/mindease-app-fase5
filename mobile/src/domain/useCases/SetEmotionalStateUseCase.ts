import { EmotionalState } from "../entities/EmotionalState";
import { EmotionalStateRepository } from "../repositories/EmotionalStateRepository";

export class SetEmotionalStateUseCase {
  constructor(private repository: EmotionalStateRepository) {}

  async execute(state: EmotionalState) {
    await this.repository.save(state);
  }
}
