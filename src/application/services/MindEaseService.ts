import { CognitiveState } from "../../domain/entities/CognitiveState";
import { ISessionRepository } from "../repositories/ISessionRepository";
import { startSession } from "../../domain/usecases/startSession";
import { changeCognitiveState } from '../../domain/usecases/changeCognitiveState';
import { endSession } from '../../domain/usecases/endSession';

export class MindEaseService {
    constructor(private sessionRepository: ISessionRepository){}
    
    async handleStart(session: CognitiveState){
        const existingSession = await this.sessionRepository.findCurrent();

        if(existingSession) {
            const silenceEndSession = endSession(existingSession);
            await this.sessionRepository.update(silenceEndSession);
        }

        const newSession = startSession(session);
        this.sessionRepository.save(newSession);
        return newSession;
    }

    async handleChangeState(newState: CognitiveState){
        const currentSession = await this.sessionRepository.findCurrent();
        if(!currentSession) throw new Error("Nenhuma sessão ativa foi encontrada...");

        const updateSession = changeCognitiveState(currentSession, newState);
        await this.sessionRepository.update(updateSession);
        return updateSession;
    }

    async handleEnd() {
        const currentSession = await this.sessionRepository.findCurrent();
        if(!currentSession) throw new Error("Nenhuma sessão para encerrar...");

        const finishedSession = endSession(currentSession);
        await this.sessionRepository.update(finishedSession);
        return finishedSession;
    }
}