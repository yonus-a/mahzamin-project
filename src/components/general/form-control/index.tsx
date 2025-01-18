import "./style.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FormControl({ children, className }: Props) {
  const classnames = "form-control " + (className || "");

  return <div className={classnames}>{children}</div>;
}
