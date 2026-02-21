import { EmotionalStateRepository } from "../repositories/EmotionalStateRepository";

export class GetEmotionalStateUseCase {
  constructor(private repository: EmotionalStateRepository) {}

  async execute() {
    return this.repository.get();
  }
}
