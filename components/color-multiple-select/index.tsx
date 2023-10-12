"use client";

import { Select, MenuItem, Box, Chip } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

export default function ColorMultipleSelect({
  items,
  register,
  watch,
  defaultValue,
}: any) {
  const selectedColors = watch("colors") || [];
  const renderClass =
    selectedColors.length > 0 || defaultValue ? "select-fix-padding" : "";
  const validate = !defaultValue && ((value: any) => value);

  return (
    <FontProvider>
      <Select
        multiple
        className={`color-multiple-select ${renderClass}`}
        {...register("colors", { validate })}
        defaultValue={defaultValue || []}
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
