import { FocusState } from "../entities/FocusArea";

export interface FocusRepository {
  get(): Promise<FocusState[] | null>;
  save(state: FocusState | null): Promise<void>;
}
