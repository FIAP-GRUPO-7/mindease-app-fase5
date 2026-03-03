import { Button } from "../components/Button";
import { PageContainer } from "../components/PageContainer";
import { ProgressIndicator } from "../components/ProgressIndicator";

type Props = {
  onRestart: () => void;
};

export function SuccessPage({ onRestart }: Props) {
  return (
    <PageContainer>
        <ProgressIndicator current={4} total={4} />
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
    </PageContainer>
  );
}