import "./style.scss";

interface Props {
  label: string;
  name: string;
  value: string;
}

export default function Checkbox({ label, name, value }: Props) {
  return (
    <label className="custom-checkbox">
      {label}
      <input type="checkbox" name={name} value={value} />
      <span className="checkmark"></span>
    </label>
  );
}
