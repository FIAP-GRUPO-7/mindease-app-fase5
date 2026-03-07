import { FocusRepositoryImpl } from "@/data/repositories/FocusRepositoryImpl";
import type { FocusArea, FocusState } from "@/domain/entities/FocusArea";
import React, { createContext, useContext, useEffect, useState } from "react";

interface FocusContextProps {
  state: FocusState[] | null;
  addFocus: (area: FocusArea) => Promise<void>;
  clearFocus: () => Promise<void>;
  loading: boolean;
}

const FocusContext = createContext<FocusContextProps>({} as FocusContextProps);

const repository = new FocusRepositoryImpl();

export function FocusProvider({ children }: { children: React.ReactNode }) {
  const [state, setStateInternal] = useState<FocusState[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const stored = await repository.get();
      setStateInternal(stored);
      setLoading(false);
    }
    load();
  }, []);

  const addFocus = async (area: FocusArea) => {
    const newState: FocusState = {
      area,
      date: new Date().toISOString(),
    };

    setStateInternal((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];

      const index = safePrev.findIndex((f) => f.area === area);

      if (index !== -1) {
        const updated = [...safePrev];
        updated[index] = newState;
        return updated;
      }

      return [...safePrev, newState];
    });

    await repository.save(newState);
  };

  const clearFocus = async () => {
    setStateInternal(null);
    await repository.save(null);
  };

  return (
    <FocusContext.Provider value={{ state, addFocus, clearFocus, loading }}>
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus() {
  return useContext(FocusContext);
}
