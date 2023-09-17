import "./style.scss";

export default function SelectWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="select-wrapper">{children}</div>;
}
