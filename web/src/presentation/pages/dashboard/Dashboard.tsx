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
  const isFocusMode = settings.focusMode;
  const reduceAnimations = settings.reducedAnimations;

  const onStartFocusSession = () => {
    navigate("/checkin", { replace: true });
  };

  return (
    <div style={{ backgroundColor: theme.background }}>
      <ResponsiveContainer>
        <div
          className={`flex flex-col gap-6 py-10 transition-all duration-300 ${isLow || isFocusMode ? "justify-center min-h-[70vh]" : ""
            }`}
          style={{
            transition: reduceAnimations ? "none" : "all 0.3s ease",
          }}
        >
          {!isLow && !isFocusMode && (
            <div className="text-center">
              <Title>Olá, {user?.name}</Title>
            </div>
          )}

          {!isFocusMode && isHigh && state && (
            <div className="text-center">
              <Subtitle className="opacity-80">
                {emotionalMessage[state.type]}
              </Subtitle>
            </div>
          )}

          <div
            style={{
              backgroundColor: theme.card,
              borderColor: isFocusMode ? theme.active : theme.border,
              transition: reduceAnimations ? "none" : "all 0.3s ease",
              transform: isFocusMode ? "scale(1.02)" : "scale(1)",
            }}
            className="mx-auto flex w-full max-w-[520px] flex-col gap-4 rounded-[24px] border p-8 text-center"
          >
            <Title>Sessão de foco</Title>

            {!isLow && !isFocusMode && <Subtitle>Pronto para começar?</Subtitle>}

            {isFocusMode && (
              <div className="mt-1 flex flex-col gap-1 text-left">
                <Subtitle
                  style={{
                    color: theme.active,
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Menos distrações
                </Subtitle>

                <Subtitle className="opacity-80">
                  Interface reduzida para concentração.
                </Subtitle>
              </div>
            )}

            <Button
              title="Iniciar agora"
              className="mt-3"
              onClick={onStartFocusSession}
            />
          </div>

          {!isFocusMode && !isLow && (
            <div
              className="text-center"
              style={{
                opacity: 0.65,
                transition: reduceAnimations ? "none" : "opacity 0.3s ease",
              }}
            >
              <Subtitle>
                Ajuste as preferências em Configurações para personalizar sua
                experiência.
              </Subtitle>
            </div>
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}