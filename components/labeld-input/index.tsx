import ErrorMsg from "@components/error-msg";
import FormControl from "@components/form-control";
import "./style.scss";

interface Props {
  label: string;
  type: string;
  name: string;
  register: any;
  errors: any;
  min?: number;
  defaultValue?: any;
}

export default function LabledInput({
  label,
  type,
  name,
  register,
  errors,
  min,
  defaultValue,
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
