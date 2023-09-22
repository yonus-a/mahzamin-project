"use client";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Box,
  Chip,
} from "@mui/material";
import { useState } from "react";
import FontProvider from "@components/font-provider";
import "./style.scss";

export default function ColorMultipleSelect({ items }: any) {
  const [itemName, setItemName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof items>) => {
    const {
      target: { value },
    } = event;
    setItemName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FontProvider>
      <FormControl className="color-multiple-select" fullWidth>
        <InputLabel id="select_label">رنگ</InputLabel>
        <Select
          className="select-input"
          name="colors"
          labelId="select_label"
          multiple
          value={itemName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                var { code, name } = items.filter(
                  ({ id }: any) => id == value
                )[0];

                return (
                  <Chip
                    key={value}
                    style={{
                      background: code,
                    }}
                    label={
                      <span style={{ color: code, filter: "invert(100%)" }}>
                        {name}
                      </span>
                    }
                  />
                );
              })}
            </Box>
          )}
        >
          {items.map(({ name, id, code }: any) => (
            <MenuItem key={name} value={id}>
              {code && (
                <span className="color-box" style={{ background: code }}></span>
              )}
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FontProvider>
  );
}
