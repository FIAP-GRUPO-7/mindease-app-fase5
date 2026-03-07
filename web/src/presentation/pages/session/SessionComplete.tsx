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
        <div className="flex flex-col py-6">
          <div
            className="flex flex-col items-center justify-between text-center"
            style={{ minHeight: "78vh" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <CheckIndicator size={90} />

              <Title>Muito bem</Title>

              <Subtitle className="opacity-70 px-4 max-w-lg">
                Você concluiu esta sessão. Leve esse momento de calma com você ao
                longo do dia.
              </Subtitle>
            </div>

            <div className="w-full max-w-md pb-4">
              <Button title="Voltar ao início" onClick={handleReturn} />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}