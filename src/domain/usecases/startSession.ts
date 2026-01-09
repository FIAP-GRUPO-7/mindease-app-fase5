import { CognitiveState } from '../entities/CognitiveState';
import { Session } from '../entities/Session';

export function startSession(state: CognitiveState): Session {
  return {
    state,
    startedAt: new Date(),
  };
}
