import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import { useEmotional } from "@/application/emotional/EmotionalContext";

import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { state } = useEmotional();
  const { settings } = useCognitive();
  const navigate = useNavigate();

  const emotionalMessage = {
    anxious: "Vamos respirar juntos para acalmar a mente.",
    distracted: "Vamos fazer uma pausa para recarregar o foco.",
    overwhelmed: "Vamos focar em uma coisa de cada vez.",
  };

  const isLow = settings.complexity === "low";
  const isHigh = settings.complexity === "high";

  const onStartFocusSession = () => {
    navigate("/checkin", { replace: true });
  };

  return (
    <div style={{ backgroundColor: theme.background }}>
      <ResponsiveContainer>
        <div
          className={`flex flex-col gap-6 py-10 ${
            isLow ? "justify-center min-h-[70vh]" : ""
          }`}
        >
          {!isLow && (
            <div className="text-center">
              <Title>Olá, {user?.name}</Title>
            </div>
          )}

          {isHigh && state && (
            <div className="text-center">
              <Subtitle className="opacity-80">
                {emotionalMessage[state.type]}
              </Subtitle>
            </div>
          )}

          <div
            style={{
              backgroundColor: theme.card,
              borderColor: theme.border,
            }}
            className="mx-auto w-full max-w-[520px] rounded-[24px] border p-8 flex flex-col gap-4 text-center"
          >
            <Title>Sessão de foco</Title>

            {!isLow && <Subtitle>Pronto para começar?</Subtitle>}

            <Button
              title="Iniciar agora"
              className="mt-3"
              onClick={onStartFocusSession}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}