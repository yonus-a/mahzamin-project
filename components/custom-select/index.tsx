"use client";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./style.scss";

interface Props {
  items: any;
  label: string;
}

const theme = createTheme({
  typography: {
    fontFamily: ["myFont", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

export default function CusomSelect({ items, label }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl className="custom-select" fullWidth>
        <InputLabel id="select_label">{label}</InputLabel>
        <Select className="select-input" labelId="select_label">
          {items.map(({ name, id }: any) => (
            <MenuItem key={name} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
