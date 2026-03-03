type Props = {
  current: number;
  total: number;
};

export function ProgressIndicator({ current, total }: Props) {
  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`progress-dot ${
            index < current ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
}