import type { HTMLAttributes, ReactNode, CSSProperties } from "react";
import { useTheme } from "@/presentation/theme/ThemeContext";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function Title({ children, style, className, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <h1
      {...rest}
      style={{
        color: theme.textPrimary,
        ...style,
      }}
      className={`text-[28px] font-semibold text-center ${className ?? ""}`}
    >
      {children}
    </h1>
  );
}
