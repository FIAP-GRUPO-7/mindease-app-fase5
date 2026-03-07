import type { ButtonHTMLAttributes } from "react";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { Text } from "./Text";

type Variant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant?: Variant;
};

export default function Button({
  title,
  variant = "primary",
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const isPrimary = variant === "primary";

  const backgroundColor = disabled
    ? theme.border
    : isPrimary
      ? theme.buttonPrimary
      : theme.optionBackground;

  const textColor = disabled
    ? theme.textSecondary
    : isPrimary
      ? theme.buttonText
      : theme.textPrimary;

  return (
    <button
      disabled={disabled}
      style={{ backgroundColor }}
      className={`
        px-8 py-4
        rounded-[18px]
        flex items-center justify-center
        transition-opacity
        ${disabled ? "opacity-70 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}
        ${className ?? ""}
      `}
      {...rest}
    >
      <Text weight="600" style={{ color: textColor }}>
        {title}
      </Text>
    </button>
  );
}
