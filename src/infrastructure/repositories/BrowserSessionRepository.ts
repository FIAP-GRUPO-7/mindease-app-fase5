import { Session } from "../../domain/entities/Session";
import { ISessionRepository } from "../../application/repositories/ISessionRepository";

export class BrowserSessionRepository implements ISessionRepository{
    private readonly STORAGE_KEY = '@mindease/current_session';

    async save(session: Session): Promise<void> {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    }
    async findCurrent(): Promise<Session | null> {
        if (typeof window === 'undefined') return null;
        
        const data = localStorage.getItem(this.STORAGE_KEY);
        if(!data) return null;

        const session = JSON.parse(data);
        return {...session, startedAt: new Date(session.startedAt)}
    }
    async update(session: Session): Promise<void> {
        await this.save(session);
    }
}