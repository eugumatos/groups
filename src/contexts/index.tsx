import { ReactNode } from "react";

import { AuthProvider } from "./AuthContext";
import { SidebarDrawerProvider } from "./SidebarDrawerContext";

type ContextProviderProps = {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  return (
    <AuthProvider>
      <SidebarDrawerProvider>
        { children }
      </SidebarDrawerProvider>
    </AuthProvider>
  );
}
