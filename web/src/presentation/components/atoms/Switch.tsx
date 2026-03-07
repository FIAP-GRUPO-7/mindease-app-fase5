import { useTheme } from "@/presentation/theme/ThemeContext";
import type { CSSProperties } from "react";

type Props = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  style?: CSSProperties;
};

export function Switch({
  value,
  onValueChange,
  disabled = false,
  style,
}: Props) {
  const { theme } = useTheme();

  const trackBg = value ? theme.buttonPrimary : theme.border;
  const thumbBg = "#FFFFFF";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      disabled={disabled}
      onClick={() => !disabled && onValueChange(!value)}
      style={style}
      className={`
        px-[2px] py-[4px]
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <div
        style={{ backgroundColor: trackBg }}
        className="w-[46px] h-[26px] rounded-full flex items-center px-[3px] transition-colors"
      >
        <div
          style={{ backgroundColor: thumbBg }}
          className={`
            w-[20px] h-[20px] rounded-full
            transition-all duration-200
            ${value ? "ml-auto" : "ml-0"}
          `}
        />
      </div>
    </button>
  );
}
