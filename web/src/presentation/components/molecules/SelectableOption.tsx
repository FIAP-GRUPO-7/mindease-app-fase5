import { useTheme } from "@/presentation/theme/ThemeContext";
import { IoCheckmark } from "react-icons/io5";
import { Text } from "../atoms/Text";

type Props = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function SelectableOption({ label, selected = false, onClick }: Props) {
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
        py-5
        px-5
        rounded-[14px]
        border
        mb-4
        flex
        items-center
        transition-all
        hover:opacity-90
      "
    >
      <div className="flex items-center">
        {selected ? (
          <div
            style={{ backgroundColor: theme.active }}
            className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
          >
            <IoCheckmark size={16} color={theme.background} />
          </div>
        ) : (
          <div
            style={{ borderColor: theme.border }}
            className="w-[22px] h-[22px] rounded-full border-[1.5px]"
          />
        )}

        <Text size={16} weight="500" className="ml-[14px]">
          {label}
        </Text>
      </div>
    </button>
  );
}
