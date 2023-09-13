import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import "./style.scss";

interface Props {
  items: any;
  label: string;
}

export default function CusomSelect({ items, label }: Props) {
  return (
    <FormControl className="custom-select" fullWidth>
      <InputLabel id="select_label">{label}</InputLabel>
      <Select className="select-input" labelId="select_label">
        {items.map((item: any) => (
          <MenuItem key={item.name} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
