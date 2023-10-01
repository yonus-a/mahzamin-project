import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";
import "./style.scss";

interface Props {
  label: string;
  name: string;
  register: any;
  errors: any;
}

export default function LabledTextarea({
  label,
  name,
  register,
  errors,
}: Props) {
  return (
    <FormControl>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...register(name, { required: true })}
        className={`labeld-textarea ${errors[name] ? "invalid-input" : ""}`}
      ></textarea>
      {errors[name] && <ErrorMsg>{label} نمی تواند خالی باشد</ErrorMsg>}
    </FormControl>
  );
}
