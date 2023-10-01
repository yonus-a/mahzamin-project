import { Select, MenuItem } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

interface Props {
  items: any;
  name: string;
  register: any;
}

export default function CustomSelect({ items, name, register }: Props) {
  return (
    <FontProvider>
      <Select
        {...register(name, { validate: (value: any) => value })}
        className="custom-select"
        id={name}
      >
        {items.map(({ name, id }: any) => (
          <MenuItem key={name} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FontProvider>
  );
}
