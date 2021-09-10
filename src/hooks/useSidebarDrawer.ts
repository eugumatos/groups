import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";

export function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);

  if (!context) {
    throw new Error('useSidebarDrawer must be used within a SidebarDrawerProvider');
  }

  return context;
}