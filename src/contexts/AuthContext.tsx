import { useEffect, createContext, ReactNode } from "react";
import { session } from "next-auth/client";
import Router from "next/router";

type AuthContextProps = {
  children: ReactNode
}

interface AuthContextData {
  user: string;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProps) {
  const isAuthenticated = !!session;

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ user: session.name, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}