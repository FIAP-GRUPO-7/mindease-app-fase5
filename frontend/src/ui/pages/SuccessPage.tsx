import { Button } from "../components/Button";

type Props = {
  onRestart: () => void;
};

export function SuccessPage({ onRestart }: Props) {
  return (
    <main className="page">
      <section className="card center">
        <div className="success-icon" aria-hidden="true">
          ✓
        </div>

        <h1 className="title">Well done</h1>
        <p className="subtitle">
          You've completed this session. Take your time before continuing with your day.
        </p>

        <Button onClick={onRestart}>Return to start</Button>
      </section>
    </main>
  );
}