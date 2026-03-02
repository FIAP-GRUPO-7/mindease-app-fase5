import { Button } from "../components/Button";

type Props = {
  onContinue: () => void;
};

export function BreathingPage({ onContinue }: Props) {
  return (
    <main className="page">
      <section className="card center">
        <h1 className="title">Take three deep breaths</h1>
        <p className="subtitle">
          Breathe in slowly through your nose, hold for a moment, then exhale gently through your mouth.
        </p>

        <div
          className="breathing-circle"
          aria-label="Breathing exercise animation"
        />

        <Button onClick={onContinue}>I’m ready to continue</Button>
      </section>
    </main>
  );
}