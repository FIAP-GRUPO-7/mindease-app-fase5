type Props = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function OptionCard({ label, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={`option ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="dot" />
      {label}
    </button>
  );
}