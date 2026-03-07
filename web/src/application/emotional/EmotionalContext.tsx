import { EmotionalStateRepositoryImpl } from "@/data/repositories/EmotionalStateRepositoryImpl";
import type { EmotionalState } from "@/domain/entities/EmotionalState";
import { GetEmotionalStateUseCase } from "@/domain/useCases/GetEmotionalStateUseCase";
import { SetEmotionalStateUseCase } from "@/domain/useCases/SetEmotionalStateUseCase";
import React, { createContext, useContext, useEffect, useState } from "react";

interface EmotionalContextProps {
  state: EmotionalState | null;
  setState: (type: EmotionalState["type"]) => Promise<void>;
}

const EmotionalContext = createContext<EmotionalContextProps>(
  {} as EmotionalContextProps,
);

const repository = new EmotionalStateRepositoryImpl();

export function EmotionalProvider({ children }: { children: React.ReactNode }) {
  const [state, setStateInternal] = useState<EmotionalState | null>(null);

  const getUseCase = new GetEmotionalStateUseCase(repository);
  const setUseCase = new SetEmotionalStateUseCase(repository);

  useEffect(() => {
    async function load() {
      const stored = await getUseCase.execute();
      setStateInternal(stored);
    }
    load();
  }, []);

  const setState = async (type: EmotionalState["type"]) => {
    const newState: EmotionalState = {
      type,
      date: new Date().toISOString(),
    };

    await setUseCase.execute(newState);
    setStateInternal(newState);
  };

  return (
    <EmotionalContext.Provider value={{ state, setState }}>
      {children}
    </EmotionalContext.Provider>
  );
}

export function useEmotional() {
  return useContext(EmotionalContext);
}
