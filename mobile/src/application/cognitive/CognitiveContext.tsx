import { CognitiveSettingsRepositoryImpl } from "@/data/repositories/CognitiveSettingsRepositoryImpl";
import { CognitiveSettings } from "@/domain/entities/CognitiveSettings";
import { GetCognitiveSettingsUseCase } from "@/domain/useCases/GetCognitiveSettingsUseCase";
import { UpdateCognitiveSettingsUseCase } from "@/domain/useCases/UpdateCognitiveSettingsUseCase";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CognitiveContextProps {
  settings: CognitiveSettings;
  update: (settings: CognitiveSettings) => Promise<void>;
  loading: boolean;
}

const CognitiveContext = createContext<CognitiveContextProps>(
  {} as CognitiveContextProps,
);

const repository = new CognitiveSettingsRepositoryImpl();

export function CognitiveProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<CognitiveSettings>({
    complexity: "medium",
    focusMode: false,
    reducedAnimations: false,
  });

  const [loading, setLoading] = useState(true);

  const getUseCase = new GetCognitiveSettingsUseCase(repository);
  const updateUseCase = new UpdateCognitiveSettingsUseCase(repository);

  useEffect(() => {
    async function load() {
      const stored = await getUseCase.execute();
      setSettings(stored);
      setLoading(false);
    }
    load();
  }, []);

  const update = async (newSettings: CognitiveSettings) => {
    await updateUseCase.execute(newSettings);
    setSettings(newSettings);
  };

  return (
    <CognitiveContext.Provider value={{ settings, update, loading }}>
      {children}
    </CognitiveContext.Provider>
  );
}

export function useCognitive() {
  return useContext(CognitiveContext);
}
