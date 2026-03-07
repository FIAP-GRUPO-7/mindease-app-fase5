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
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ResponsiveContainer>
        <div
          className={`flex flex-col pt-8 gap-5 ${
            isLow ? "justify-center min-h-screen" : ""
          }`}
        >
          {!isLow && <Title>Olá, {user?.name}</Title>}

          {isHigh && state && (
            <Subtitle className="opacity-80">
              {emotionalMessage[state.type]}
            </Subtitle>
          )}

          <div
            style={{
              backgroundColor: theme.card,
              borderColor: theme.border,
            }}
            className="p-7 rounded-[24px] border flex flex-col gap-3"
          >
            <Title>Sessão de foco</Title>

            {!isLow && <Subtitle>Pronto para começar?</Subtitle>}

            <Button
              title="Iniciar agora"
              className="mt-4"
              onClick={onStartFocusSession}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
