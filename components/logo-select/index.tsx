import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

interface Props {
  items: any;
  name: string;
}

export default function LogoSelect({ items, name }: Props) {
  return (
    <FontProvider>
      <FormControl className="logo-select" fullWidth>
        <InputLabel id="select_label">لوگو</InputLabel>
        <Select name={name} className="select-input" labelId="select_label">
          {items.map(({ name, id }: any) => (
            <MenuItem key={name} value={id}>
              <svg className="logo-select-svg" aria-hidden="true">
                <use href={`#${name}`} />
              </svg>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FontProvider>
  );
}
