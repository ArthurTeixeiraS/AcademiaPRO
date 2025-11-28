import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE_URL } from '../services/apiService';

interface AuthContextType {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('authToken');
    const storedUser = sessionStorage.getItem('authUser');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

  const login = async (username: string, password: string) => {
    const trimmedUser = username.trim();
    if (!trimmedUser || !password) {
      throw new Error('Informe usuário e senha.');
    }

    const basicToken = btoa(`${trimmedUser}:${password}`);
    const authHeader = `Basic ${basicToken}`;

    const response = await fetch(`${API_BASE_URL}/alunos?page=0&size=1`, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      throw new Error('Usuário ou senha inválidos.');
    }

    setUser(trimmedUser);
    setToken(basicToken);

    sessionStorage.setItem('authToken', basicToken);
    sessionStorage.setItem('authUser', trimmedUser);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('authUser');
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return ctx;
};
