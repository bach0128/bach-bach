"use client";

import { ThemeProvider } from "next-themes";

export function ProvidersTheme({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
