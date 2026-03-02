import { useState } from "react";
import { Button } from "../components/Button";
import { OptionCard } from "../components/OptionCard";

const NEEDS = [
  "Clarity",
  "Focus",
  "Calm"
];

type Props = {
  onContinue: () => void;
};

export function NeedPage({ onContinue }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="page">
      <section className="card">
        <h1 className="title">What do you need right now?</h1>
        <p className="subtitle">Select what feels true rigth now.</p>

        <fieldset className="options">
          <legend className="sr-only">Current need</legend>

          {NEEDS.map((need) => (
            <OptionCard
              key={need}
              label={need}
              selected={selected === need}
              onSelect={() => setSelected(need)}
            />
          ))}
        </fieldset>

        <Button onClick={onContinue}>Continue</Button>
      </section>
    </main>
  );
}