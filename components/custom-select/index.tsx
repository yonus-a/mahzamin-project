import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

interface Props {
  items: any;
  label: string;
  name: string;
}

export default function CustomSelect({ items, label, name }: Props) {
  return (
    <FontProvider>
      <FormControl className="custom-select" fullWidth>
        <InputLabel id="select_label">{label}</InputLabel>
        <Select name={name} className="select-input" labelId="select_label">
          {items.map(({ name, id }: any) => (
            <MenuItem key={name} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FontProvider>
  );
}
