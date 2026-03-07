import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";

import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Switch } from "@/presentation/components/atoms/Switch";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { SelectableCard } from "@/presentation/components/molecules/SelectableCard";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { theme, toggleTheme, isDark, isColorBlind, toggleColorBlindMode } =
    useTheme();

  const { settings, update } = useCognitive();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const changeComplexity = async (level: "low" | "medium" | "high") => {
    await update({ ...settings, complexity: level });
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ResponsiveContainer>
        <div className="pt-4 pb-2">
          <Title>Configurações</Title>
        </div>

        <div className="pt-4 flex flex-col gap-3 overflow-y-auto pb-16">
          <Subtitle>Nível de complexidade</Subtitle>

          <SelectableCard
            label="Baixo"
            selected={settings.complexity === "low"}
            onClick={() => changeComplexity("low")}
          />

          <SelectableCard
            label="Médio"
            selected={settings.complexity === "medium"}
            onClick={() => changeComplexity("medium")}
          />

          <SelectableCard
            label="Alto"
            selected={settings.complexity === "high"}
            onClick={() => changeComplexity("high")}
          />

          <Subtitle className="mt-5">Ajustes adicionais</Subtitle>

          <div className="flex justify-between items-center">
            <Subtitle>Modo foco</Subtitle>
            <Switch
              value={settings.focusMode}
              onValueChange={(value) =>
                update({ ...settings, focusMode: value })
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <Subtitle>Reduzir animações</Subtitle>
            <Switch
              value={settings.reducedAnimations}
              onValueChange={(value) =>
                update({ ...settings, reducedAnimations: value })
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <Subtitle>Modo daltônico</Subtitle>
            <Switch value={isColorBlind} onValueChange={toggleColorBlindMode} />
          </div>

          <Subtitle className="mt-5">Aparência</Subtitle>

          <div className="flex justify-between items-center">
            <Subtitle>Modo escuro</Subtitle>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </div>

          <div className="flex justify-between items-center gap-3">
            <Subtitle>Progresso</Subtitle>

            <div className="flex gap-2 items-center">
              <Button
                title="Bolinhas"
                variant={
                  settings.progressType === "dots" ? "primary" : "secondary"
                }
                onClick={() => update({ ...settings, progressType: "dots" })}
              />

              <Button
                title="Barra"
                variant={
                  settings.progressType === "bar" ? "primary" : "secondary"
                }
                onClick={() => update({ ...settings, progressType: "bar" })}
              />
            </div>
          </div>

          <div className="mt-8">
            <Button
              title="Sair da conta"
              variant="secondary"
              onClick={handleLogout}
            />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
