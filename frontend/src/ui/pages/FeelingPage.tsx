import { useState } from "react";
import { Button } from "../components/Button";
import { OptionCard } from "../components/OptionCard";

const FEELINGS = ["Anxious", "Distracted", "Overwhelmed"];

type Props = {
  onContinue: () => void;
};

export function FeelingPage({ onContinue }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="page">
      <section className="card">
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
      </section>
    </main>
  );
}