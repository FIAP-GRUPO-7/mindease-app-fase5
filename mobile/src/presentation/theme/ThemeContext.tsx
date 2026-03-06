import React, { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "./theme";

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
  isColorBlind: boolean;
  toggleColorBlindMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isColorBlind, setIsColorBlind] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleColorBlindMode = () => {
    setIsColorBlind((prev) => !prev);
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
  
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, isColorBlind, toggleColorBlindMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
