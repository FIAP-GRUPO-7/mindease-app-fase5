import type { FocusState } from "@/domain/entities/FocusArea";
import type { FocusRepository } from "@/domain/repositories/FocusRepository";

const KEY = "@mindease_focus";

export class FocusRepositoryImpl implements FocusRepository {
  async get(): Promise<FocusState[] | null> {
    const data = localStorage.getItem(KEY);

    if (!data) return null;

    return JSON.parse(data);
  }

  async save(state: FocusState | null): Promise<void> {
    if (!state) {
      localStorage.removeItem(KEY);
      return;
    }

    localStorage.setItem(KEY, JSON.stringify(state));
  }
}