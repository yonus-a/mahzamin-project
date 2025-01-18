"use client";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: ["myFont", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

interface Props {
  children: React.ReactNode;
}

export default function FontProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
