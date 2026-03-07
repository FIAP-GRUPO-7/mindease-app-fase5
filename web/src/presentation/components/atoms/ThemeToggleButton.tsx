import { useTheme } from "@/presentation/theme/ThemeContext";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export function ThemeToggleButton() {
  const { isDark, toggleTheme, theme } = useTheme();

  const Icon = isDark ? IoSunnyOutline : IoMoonOutline;

  return (
    <button
      onClick={toggleTheme}
      style={{ backgroundColor: theme.card }}
      className="
        w-[60px]
        h-[60px]
        rounded-[18px]
        flex
        items-center
        justify-center
        transition-opacity
        hover:opacity-80
      "
    >
      <Icon size={22} color={theme.icon} />
    </button>
  );
}
