import { useFocus } from "@/application/focus/FocusContext";
import type { FocusArea } from "@/domain/entities/FocusArea";

import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { SelectableOption } from "@/presentation/components/molecules/SelectableOption";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { ThemeToggleButton } from "@/presentation/components/atoms/ThemeToggleButton";

import { useTheme } from "@/presentation/theme/ThemeContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Focus() {
  const { theme } = useTheme();
  const { addFocus } = useFocus();
  const { settings } = useCognitive();
  const navigate = useNavigate();

  const [selected, setSelected] = useState<FocusArea[]>([]);

  const toggleSelection = (area: FocusArea) => {
    setSelected((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area],
    );
  };

  const handleContinue = async () => {
    if (selected.length === 0) return;

    await Promise.all(selected.map((area) => addFocus(area)));

    navigate("/breathing");
  };

  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="min-h-screen relative"
    >
      <div className="absolute top-[60px] right-6 z-10">
        <ThemeToggleButton />
      </div>

      <ResponsiveContainer>
        <ProgressIndicator
          current={2}
          total={3}
          type={settings.progressType}
          className="mt-5"
        />

        <div className="flex flex-col justify-center gap-4 py-6 min-h-screen">
          <Title>Do que você precisa?</Title>

          <Subtitle>Escolha as áreas que deseja priorizar agora.</Subtitle>

          <SelectableOption
            label="Clareza"
            selected={selected.includes("clarity")}
            onClick={() => toggleSelection("clarity")}
          />

          <SelectableOption
            label="Foco"
            selected={selected.includes("focus")}
            onClick={() => toggleSelection("focus")}
          />

          <SelectableOption
            label="Calma"
            selected={selected.includes("calm")}
            onClick={() => toggleSelection("calm")}
          />

          <Button
            title="Continuar"
            onClick={handleContinue}
            disabled={selected.length === 0}
          />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
