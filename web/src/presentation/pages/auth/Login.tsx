import { useAuth } from "@/application/auth/AuthContext";
import Button from "@/presentation/components/atoms/Button";
import Input from "@/presentation/components/atoms/Input";
import { Title } from "@/presentation/components/atoms/Title";
import ResponsiveContainer from "@/presentation/components/ResponsiveContainer";
import { useTheme } from "@/presentation/theme/ThemeContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleLogin = async () => {
    await login(name);
    navigate("/checkin");
  };

  return (
    <div style={{ backgroundColor: theme.background }} className="min-h-screen">
      <ResponsiveContainer>
        <div className="flex flex-col justify-center gap-5 min-h-screen">
          <Title>Welcome</Title>

          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            title="Continue"
            onClick={handleLogin}
            disabled={!name.trim()}
          />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
