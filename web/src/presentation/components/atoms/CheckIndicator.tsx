import { useTheme } from "@/presentation/theme/ThemeContext";
import { IoCheckmark } from "react-icons/io5";

type Props = {
  size?: number;
};

export function CheckIndicator({ size = 80 }: Props) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: theme.optionBackground,
      }}
      className="flex items-center justify-center"
    >
      <IoCheckmark size={size * 0.5} color={theme.textPrimary} />
    </div>
  );
}
