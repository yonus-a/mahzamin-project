import "./style.scss";

export default function InputWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classnames = "input-wrapper " + (className || "");

  return <div className={classnames}>{children}</div>;
}
