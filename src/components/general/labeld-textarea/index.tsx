import FormControl from "@components/general/form-control";
import ErrorMsg from "@components/general/error-msg";
import "./style.scss";

interface Props {
  label: string;
  name: string;
  register: any;
  errors: any;
  defaultValue?: any;
}

export default function LabledTextarea({
  label,
  name,
  register,
  errors,
  defaultValue,
}: Props) {
  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...register(name, { required: !defaultValue })}
        defaultValue={defaultValue}
        className={`labeld-textarea ${errors[name] ? "invalid-input" : ""}`}
      ></textarea>
      {errors[name] && <ErrorMsg>{label} نمی تواند خالی باشد</ErrorMsg>}
    </FormControl>
  );
}
