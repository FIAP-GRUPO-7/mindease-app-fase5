import type { HTMLAttributes, ReactNode, CSSProperties } from "react";
import { useTheme } from "@/presentation/theme/ThemeContext";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  size?: number;
  weight?: "400" | "500" | "600" | "700";
  color?: "primary" | "secondary";
  align?: "left" | "center" | "right";
  style?: CSSProperties;
};

export function Text({
  children,
  size = 16,
  weight = "400",
  color = "primary",
  align = "left",
  style,
  className,
  ...rest
}: Props) {
  const { theme } = useTheme();

  const textColor =
    color === "primary" ? theme.textPrimary : theme.textSecondary;

  return (
    <span
      {...rest}
      style={{
        fontSize: size,
        fontWeight: weight,
        color: textColor,
        textAlign: align,
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  );
}
