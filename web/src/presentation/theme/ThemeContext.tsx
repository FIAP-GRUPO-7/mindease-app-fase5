import React, { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme, type ThemeType } from "./theme";

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
  isColorBlind: boolean;
  toggleColorBlindMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const STORAGE_KEYS = {
  isDark: "mindease:isDark",
  isColorBlind: "mindease:isColorBlind",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isColorBlind, setIsColorBlind] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedIsDark = localStorage.getItem(STORAGE_KEYS.isDark);
      const storedIsColorBlind = localStorage.getItem(
        STORAGE_KEYS.isColorBlind
      );

      if (storedIsDark !== null) {
        setIsDark(storedIsDark === "true");
      }

      if (storedIsColorBlind !== null) {
        setIsColorBlind(storedIsColorBlind === "true");
      }
    } catch (error) {
      console.error("Erro ao carregar preferências de tema:", error);
    } finally {
      setIsReady(true);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const nextValue = !isDark;
      setIsDark(nextValue);
      localStorage.setItem(STORAGE_KEYS.isDark, String(nextValue));
    } catch (error) {
      console.error("Erro ao salvar tema:", error);
    }
  };

  const toggleColorBlindMode = () => {
    try {
      const nextValue = !isColorBlind;
      setIsColorBlind(nextValue);
      localStorage.setItem(STORAGE_KEYS.isColorBlind, String(nextValue));
    } catch (error) {
      console.error("Erro ao salvar modo daltônico:", error);
    }
  };

  const baseTheme = isDark ? darkTheme : lightTheme;

  const theme = isColorBlind
    ? {
      ...baseTheme,
      buttonPrimary: baseTheme.colorBlindActive,
      optionBackground: baseTheme.colorBlindInactive,
      active: baseTheme.colorBlindActive,
      inactive: baseTheme.colorBlindInactive,
    }
    : baseTheme;

  if (!isReady) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        isColorBlind,
        toggleColorBlindMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}