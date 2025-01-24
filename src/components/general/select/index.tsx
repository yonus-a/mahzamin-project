import { useFormContext } from "react-hook-form";
import { SelectProps } from "./type";
import ErrorMsg from "../error-msg";
import "./styles.scss";

export default function Select({ errorMsg = true, ...props }: SelectProps) {
  const { register, getFieldState } = useFormContext();
  const error: any = getFieldState(props.name).error;
  const className = `${error ? "invalid-input" : ""} ${props.className || ""}`;

  return (
    <>
      <select
        {...register(props.name)}
        defaultValue={props.defaultValues}
        className={!props.noStyle ? `select ${className}` : className}
        style={props.style}
      >
        {props.placeholder && <option value="">{props.placeholder}</option>}
        {props.items?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {error && errorMsg && <ErrorMsg>{error.message}</ErrorMsg>}
    </>
  );
}
