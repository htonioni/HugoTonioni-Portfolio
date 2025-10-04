"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export const ConditionalFooter = () => {
  const pathname = usePathname();
  
  // Não mostra footer na home page
  if (pathname === "/") {
    return null;
  }
  
  return <Footer />;
};