"use client";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#fdc210",
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export default function MaterialTheme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
