import "./style.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InputWrapper({ children, className }: Props) {
  const classnames = "input-wrapper " + (className || "");

  return <div className={classnames}>{children}</div>;
}
