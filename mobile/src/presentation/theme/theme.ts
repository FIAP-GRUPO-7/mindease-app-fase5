export const lightTheme = {
  background: "#F3F3F3",
  surface: "#FFFFFF",
  card: "#E6E6E6",
  border: "#D0D0D0",

  textPrimary: "#4A4A4A",
  textSecondary: "#9A9A9A",

  buttonPrimary: "#6B6763",
  buttonText: "#FFFFFF",

  optionBackground: "#E4E4E4",
  optionSelected: "#AFAFAF",

  icon: "#4A4A4A",
  statusbarBackground: "#E6E6E6",

  active: "#6B6763", 
  inactive: "#D0D0D0",
};

export const darkTheme = {
  background: "#14110F",
  surface: "#1E1A17",
  card: "#2A2521",
  border: "#3A342F",

  textPrimary: "#F5F5F5",
  textSecondary: "#B5B5B5",

  buttonPrimary: "#DADADA",
  buttonText: "#1A1A1A",

  optionBackground: "#2B2622",
  optionSelected: "#4A443F",

  icon: "#F5F5F5",
  statusbarBackground: "#1E1A17",

  active: "#DADADA", // Cor para elementos ativos
  inactive: "#3A342F", // Cor para elementos inativos
};

export type ThemeType = typeof lightTheme;
