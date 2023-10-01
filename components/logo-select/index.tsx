import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import FontProvider from "@components/font-provider";
import "./style.scss";

interface Props {
  items: any;
  name: string;
  className?: string;
  register: any;
}

export default function LogoSelect({
  items,
  name,
  className,
  register,
}: Props) {
  const classnames = "logo-select " + (className || "");

  return (
    <FontProvider>
      <FormControl className={classnames} fullWidth>
        <InputLabel id="select_label">لوگو</InputLabel>
        <Select
          {...register(name, { validate: (value: any) => value })}
          className="select-input"
          labelId="select_label"
        >
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
