import { Select, MenuItem } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

interface Props {
  items: any;
  name: string;
  register: any;
  defaultValue: any;
}

export default function CustomSelect({
  items,
  name,
  register,
  defaultValue,
}: Props) {
  const validate = !defaultValue && ((value: any) => value);

  return (
    <FontProvider>
      <Select
        {...register(name, { validate })}
        defaultValue={defaultValue}
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
