import { Session } from "../../domain/entities/Session";

export interface ISessionRepository {
    save(session: Session): Promise<void>
    findCurrent(): Promise<Session | null>
    update(session: Session): Promise<void>
}