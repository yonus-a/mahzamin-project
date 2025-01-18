import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormControl from "../form-control";
import ErrorMsg from "../error-msg";
import "./style.scss";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  defaultValue?: any;
  label: string;
  type: string;
  name: string;
  min?: number;
}

export default function LabledInput({
  defaultValue,
  register,
  errors,
  label,
  type,
  name,
  min,
}: Props) {
  const error = errors[name];
  const requiredError = error?.type === "required";
  const minError = error?.type === "min";

  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        className={`labeld-input ${error ? "invalid-input" : ""}`}
        {...register(name, { required: true, min })}
        defaultValue={defaultValue}
      />
      {requiredError && <ErrorMsg>{label} نمی تواند خالی باشد</ErrorMsg>}
      {minError && <ErrorMsg>{label} نمی تواند منفی باشد</ErrorMsg>}
    </FormControl>
  );
}
