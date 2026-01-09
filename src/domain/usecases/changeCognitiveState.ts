import { CognitiveState } from '../entities/CognitiveState';
import { Session } from '../entities/Session';

export function changeCognitiveState(
  session: Session,
  newState: CognitiveState
): Session {
  return {
    ...session,
    state: newState,
  };
}
