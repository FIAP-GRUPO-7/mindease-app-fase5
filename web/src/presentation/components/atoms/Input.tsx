import type { InputHTMLAttributes } from "react";
import { useTheme } from "@/presentation/theme/ThemeContext";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export default function Input({ error, className, style, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <input
      {...rest}
      style={{
        backgroundColor: theme.surface,
        borderColor: error ? "#D9534F" : theme.border,
        color: theme.textPrimary,
        ...style,
      }}
      className={`
        border
        rounded-[18px]
        px-5
        py-3.5
        text-base
        outline-none
        transition-colors
        ${className ?? ""}
      `}
      placeholder={rest.placeholder}
    />
  );
}
