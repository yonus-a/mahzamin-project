import "./style.scss";

export default function InputWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="input-wrapper">{children}</div>;
}
