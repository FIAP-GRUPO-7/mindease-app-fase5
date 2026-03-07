import { useTheme } from "@/presentation/theme/ThemeContext";
import type { CSSProperties } from "react";

type ProgressIndicatorProps = {
  current: number;
  total: number;
  style?: CSSProperties;
  type?: "bar" | "dots";
  className?: string;
};

export function ProgressIndicator({
  current,
  total,
  style,
  type = "bar",
}: ProgressIndicatorProps) {
  const { theme } = useTheme();

  const progress = Math.min(current / total, 1);
  const activeColor = theme.active;
  const inactiveColor = theme.inactive;

  if (type === "dots") {
    return (
      <div style={style} className="flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index < current ? activeColor : inactiveColor,
            }}
            className="w-[10px] h-[10px] rounded-full"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: inactiveColor,
        ...style,
      }}
      className="w-full h-[10px] rounded-[5px] overflow-hidden"
    >
      <div
        style={{
          width: `${progress * 100}%`,
          backgroundColor: activeColor,
        }}
        className="h-full transition-all duration-300"
      />
    </div>
  );
}
