import Button from "@/presentation/components/atoms/Button";
import { CheckIndicator } from "@/presentation/components/atoms/CheckIndicator";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";

export default function SessionComplete() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ResponsiveContainer>
        <div className="flex flex-col justify-between py-6 min-h-screen">
          <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">
            <CheckIndicator size={90} />

            <Title>Muito bem</Title>

            <Subtitle className="opacity-70 px-4">
              Você concluiu esta sessão. Leve esse momento de calma com você ao
              longo do dia.
            </Subtitle>
          </div>

          <div className="pb-6">
            <Button title="Voltar ao início" onClick={handleReturn} />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
