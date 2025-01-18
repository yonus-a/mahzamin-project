import { FieldValues, UseFormRegister } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";
import FontProvider from "../general/font-provider";
import "./style.scss";

interface Props {
  register: UseFormRegister<FieldValues>;
  defaultValue: any;
  items: any;
  name: string;
}

export default function CustomSelect({
  defaultValue,
  register,
  items,
  name,
}: Props) {
  const validate = !defaultValue ? (value: any) => value : undefined;

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
