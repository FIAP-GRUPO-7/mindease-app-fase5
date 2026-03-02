type Props = {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  onClick,
  variant = "primary",
}: Props) {
  return (
    <div className="button-wrapper">
      <button
        type="button"
        onClick={onClick}
        className={`btn ${variant}`}
      >
        {children}
      </button>
    </div>
  );
}