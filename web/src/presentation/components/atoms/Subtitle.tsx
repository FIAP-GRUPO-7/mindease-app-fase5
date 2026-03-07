import type { HTMLAttributes, ReactNode, CSSProperties } from "react";
import { useTheme } from "@/presentation/theme/ThemeContext";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function Subtitle({ children, style, className, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <p
      {...rest}
      style={{
        color: theme.textSecondary,
        ...style,
      }}
      className={`text-base text-center mt-2 ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
