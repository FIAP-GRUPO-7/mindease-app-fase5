import { getBreathingPattern } from "@/application/breathing/getBreathingPattern";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import { useFocus } from "@/application/focus/FocusContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";

import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { BreathingOrb } from "@/presentation/components/organisms/BreathingOrb";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";

import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";

export default function BreathingIntro() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const { state: emotionalState } = useEmotional();
  const { state: focusState } = useFocus();
  const { settings } = useCognitive();

  const emotional = emotionalState?.type;
  const focus = focusState?.[0]?.area;

  const pattern = getBreathingPattern(emotional ?? "anxious", focus ?? "calm");

  const handleContinue = () => {
    navigate("/session-complete");
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ProgressIndicator
        current={3}
        total={3}
        type={settings.progressType}
        className="mt-5"
      />

      <ResponsiveContainer>
        <div className="flex flex-col justify-between min-h-screen py-[60px]">
          <div className="flex flex-col items-center gap-2 mt-10">
            <Title>Respire com calma</Title>

            <Subtitle>
              Inspire lentamente pelo nariz enquanto o círculo cresce. <br />
              Solte o ar pela boca enquanto ele se recolhe.
            </Subtitle>
          </div>

          <div className="flex justify-center items-center flex-1">
            <BreathingOrb
              inhaleDuration={pattern.inhale}
              exhaleDuration={pattern.exhale}
              pauseDuration={pattern.pause}
              size={200}
            />
          </div>

          <div className="pb-6">
            <Button
              title="Estou pronto para continuar"
              onClick={handleContinue}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
