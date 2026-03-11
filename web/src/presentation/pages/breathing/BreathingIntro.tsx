import { getBreathingPattern } from "@/application/breathing/getBreathingPattern";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEmotional } from "@/application/emotional/EmotionalContext";
import { useFocus } from "@/application/focus/FocusContext";

import Button from "@/presentation/components/atoms/Button";
import { ProgressIndicator } from "@/presentation/components/atoms/ProgressIndicator";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { BreathingOrb } from "@/presentation/components/organisms/BreathingOrb";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";

export default function BreathingIntro() {
  const { theme } = useTheme();
  const { state: emotionalState } = useEmotional();
  const { state: focusState } = useFocus();
  const { settings } = useCognitive();
  const navigate = useNavigate();

  const emotional = emotionalState?.type;
  const focus = focusState?.[0]?.area;
  const isFocusMode = settings.focusMode;

  const pattern = getBreathingPattern(emotional ?? "anxious", focus ?? "calm");

  const handleContinue = () => {
    navigate("/session-complete");
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ResponsiveContainer>
        {!isFocusMode && (
          <ProgressIndicator
            current={3}
            total={3}
            type={settings.progressType}
            className="mt-5"
          />
        )}

        <div className="flex min-h-screen flex-col justify-between py-[60px]">
          <div className="mt-10 flex flex-col items-center gap-2">
            <Title>Respire com calma</Title>

            <Subtitle className="text-center">
              Inspire lentamente pelo nariz enquanto o círculo cresce. <br />
              Solte o ar pela boca enquanto ele se recolhe.
            </Subtitle>
          </div>

          <div className="flex flex-1 items-center justify-center">
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