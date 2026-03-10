import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, lightTheme, ThemeType } from "./theme";

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => Promise<void>;
  isColorBlind: boolean;
  toggleColorBlindMode: () => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const STORAGE_KEYS = {
  isDark: "@mindease:isDark",
  isColorBlind: "@mindease:isColorBlind",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isColorBlind, setIsColorBlind] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadPreferences() {
      try {
        const storedIsDark = await AsyncStorage.getItem(STORAGE_KEYS.isDark);
        const storedIsColorBlind = await AsyncStorage.getItem(
          STORAGE_KEYS.isColorBlind
        );

        if (storedIsDark !== null) {
          setIsDark(storedIsDark === "true");
        }

        if (storedIsColorBlind !== null) {
          setIsColorBlind(storedIsColorBlind === "true");
        }
      } catch (error) {
        console.log("Erro ao carregar preferências de tema:", error);
      } finally {
        setIsReady(true);
      }
    }

    loadPreferences();
  }, []);

  const toggleTheme = async () => {
    try {
      const nextValue = !isDark;
      setIsDark(nextValue);
      await AsyncStorage.setItem(STORAGE_KEYS.isDark, String(nextValue));
    } catch (error) {
      console.log("Erro ao salvar tema:", error);
    }
  };

  const toggleColorBlindMode = async () => {
    try {
      const nextValue = !isColorBlind;
      setIsColorBlind(nextValue);
      await AsyncStorage.setItem(
        STORAGE_KEYS.isColorBlind,
        String(nextValue)
      );
    } catch (error) {
      console.log("Erro ao salvar modo daltônico:", error);
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