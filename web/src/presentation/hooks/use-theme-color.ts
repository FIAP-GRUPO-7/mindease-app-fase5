import { useColorScheme } from "@/presentation/hooks/use-color-scheme";
import { lightTheme, darkTheme } from "@/presentation/theme/theme";

type ThemeName = "light" | "dark";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof lightTheme
) {
  const themeName = (useColorScheme() ?? "light") as ThemeName;

  const theme = themeName === "dark" ? darkTheme : lightTheme;

  const colorFromProps = props[themeName];

  if (colorFromProps) {
    return colorFromProps;
  }

  return theme[colorName];
}