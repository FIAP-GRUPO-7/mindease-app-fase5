import { Session } from '../entities/Session';

export function endSession(session: Session): Session {
  return {
    ...session,
    endedAt: new Date(),
  };
}
