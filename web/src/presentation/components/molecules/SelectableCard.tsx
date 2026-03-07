import { useTheme } from "@/presentation/theme/ThemeContext";
import { Text } from "../atoms/Text";

type Props = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function SelectableCard({ label, selected = false, onClick }: Props) {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.optionBackground,
        borderColor: selected ? theme.active : theme.border,
      }}
      className="
        w-full
        py-[22px]
        rounded-[12px]
        border
        mb-4
        flex
        items-center
        justify-center
        transition-all
        hover:opacity-90
      "
    >
      <Text size={16} weight="500" align="center">
        {label}
      </Text>
    </button>
  );
}
