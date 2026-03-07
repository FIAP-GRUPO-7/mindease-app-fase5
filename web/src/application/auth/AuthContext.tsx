import { AuthRepositoryImpl } from "@/data/repositories/AuthRepositoryImpl";
import type { User } from "@/domain/entities/User";
import { GetCurrentUserUseCase } from "@/domain/useCases/GetCurrentUserUseCase";
import { LoginUseCase } from "@/domain/useCases/LoginUseCase";
import { LogoutUseCase } from "@/domain/useCases/LogoutUseCase";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (name: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const repository = new AuthRepositoryImpl();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loginUseCase = new LoginUseCase(repository);
  const logoutUseCase = new LogoutUseCase(repository);
  const getCurrentUserUseCase = new GetCurrentUserUseCase(repository);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await getCurrentUserUseCase.execute();
      setUser(storedUser);
      setLoading(false);
    }
    loadUser();
  }, []);

  const login = async (name: string) => {
    const loggedUser = await loginUseCase.execute(name);
    setUser(loggedUser);
  };

  const logout = async () => {
    await logoutUseCase.execute();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
