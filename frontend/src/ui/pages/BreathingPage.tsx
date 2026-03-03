import { Button } from "../components/Button";
import { PageContainer } from "../components/PageContainer";
import { ProgressIndicator } from "../components/ProgressIndicator";

type Props = {
  onContinue: () => void;
};

export function BreathingPage({ onContinue }: Props) {
  return (
    <PageContainer centered>
        <ProgressIndicator current={3} total={4} />
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
    </PageContainer>
  );
}