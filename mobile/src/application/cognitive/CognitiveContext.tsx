import { useEmotional } from "@/application/emotional/EmotionalContext";
import { CognitiveSettingsRepositoryImpl } from "@/data/repositories/CognitiveSettingsRepositoryImpl";
import { CognitiveSettings } from "@/domain/entities/CognitiveSettings";
import { adaptCognitiveSettings } from "@/domain/services/AdaptCognitiveSettings";
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

  const { state: emotionalState } = useEmotional();

  const effectiveSettings = adaptCognitiveSettings(settings, emotionalState);

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

  useEffect(() => {
    console.log(
      "Emotional state changed:",
      JSON.stringify(emotionalState, null, 2),
    );
    console.log(
      "Effective settings changed:",
      JSON.stringify(effectiveSettings, null, 2),
    );
    console.log("Base settings:", JSON.stringify(settings, null, 2));
  }, [settings, emotionalState, effectiveSettings]);

  const update = async (newSettings: CognitiveSettings) => {
    await updateUseCase.execute(newSettings);
    setSettings(newSettings);
  };

  return (
    <CognitiveContext.Provider
      value={{ settings: effectiveSettings, update, loading }}
    >
      {children}
    </CognitiveContext.Provider>
  );
}

export function useCognitive() {
  return useContext(CognitiveContext);
}
