import { CognitiveState } from './CognitiveState';

export interface Session {
  state: CognitiveState;
  startedAt: Date;
  endedAt?: Date;
}
