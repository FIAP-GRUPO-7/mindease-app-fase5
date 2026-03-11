import { useEmotional } from "@/application/emotional/EmotionalContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import type { EmotionalType } from "@/domain/entities/EmotionalState";

import Button from "@/presentation/components/atoms/Button";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { ThemeToggleButton } from "@/presentation/components/atoms/ThemeToggleButton";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { SelectableCard } from "@/presentation/components/molecules/SelectableCard";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CheckIn() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [selected, setSelected] = useState<EmotionalType | null>(null);

  const { setState } = useEmotional();
  const { settings } = useCognitive();

  const isFocusMode = settings.focusMode;

  const handleContinue = async () => {
    if (!selected) return;

    await setState(selected);
    navigate("/focus");
  };

  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="min-h-screen relative"
    >
      {!isFocusMode && (
        <div className="absolute top-[60px] right-6 z-10">
          <ThemeToggleButton />
        </div>
      )}

      <ResponsiveContainer>
        {!isFocusMode && (
          <ProgressIndicator
            current={1}
            total={3}
            type={settings.progressType}
            className="mt-5"
          />
        )}

        <div className="flex min-h-screen flex-col justify-center gap-4">
          <div className="mb-10">
            <Title>Como você está agora?</Title>

            <Subtitle>
              Escolha a opção que mais combina com você agora.
            </Subtitle>
          </div>

          <SelectableCard
            label="Ansiedade"
            selected={selected === "anxious"}
            onClick={() => setSelected("anxious")}
          />

          <SelectableCard
            label="Distração"
            selected={selected === "distracted"}
            onClick={() => setSelected("distracted")}
          />

          <SelectableCard
            label="Sobrecarga"
            selected={selected === "overwhelmed"}
            onClick={() => setSelected("overwhelmed")}
          />

          <Button
            title="Continuar"
            onClick={handleContinue}
            disabled={!selected}
            className="mt-4"
          />
        </div>
      </ResponsiveContainer>
    </div>
  );
}