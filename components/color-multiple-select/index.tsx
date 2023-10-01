"use client";

import { Select, MenuItem, Box, Chip } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

export default function ColorMultipleSelect({ items, register, watch }: any) {
  const selectedColors = watch("colors") || [];
  const renderClass = selectedColors.length > 0 ? "select-fix-padding" : "";

  return (
    <FontProvider>
      <Select
        className={`color-multiple-select ${renderClass}`}
        {...register("colors", {
          validate: (value: any) => value,
        })}
        multiple
        defaultValue={[]}
        renderValue={(selected: [number]) => {
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((id: any) => {
                var { code, name } = items.filter(
                  (item: any) => item.id === id
                )[0];

                return (
                  <Chip
                    key={id}
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
          );
        }}
      >
        {items.map(({ name, id, code }: any) => (
          <MenuItem key={name} value={id}>
            <span className="color-box" style={{ background: code }}></span>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FontProvider>
  );
}
