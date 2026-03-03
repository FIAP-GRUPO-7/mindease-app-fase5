import { useState } from "react";
import { PageContainer } from "../components/PageContainer";
import { Button } from "../components/Button";
import { OptionCard } from "../components/OptionCard";
import { ProgressIndicator } from "../components/ProgressIndicator";

const FEELINGS = ["Anxious", "Distracted", "Overwhelmed"];

type Props = {
  onContinue: () => void;
};

export function FeelingPage({ onContinue }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PageContainer>
      <ProgressIndicator current={1} total={4} />

      <h1 className="title">How are you feeling now?</h1>
      <p className="subtitle">Be honest with yourself.</p>

      <fieldset className="options">
        <legend className="sr-only">Current feeling</legend>

        {FEELINGS.map((feeling) => (
          <OptionCard
            key={feeling}
            label={feeling}
            selected={selected === feeling}
            onSelect={() => setSelected(feeling)}
          />
        ))}
      </fieldset>

      <Button onClick={onContinue}>Continue</Button>
    </PageContainer>
  );
}