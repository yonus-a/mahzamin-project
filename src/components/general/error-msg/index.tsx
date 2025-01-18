import "./style.scss";

interface Props {
  children: React.ReactNode;
}

export default function ErrorMsg({ children }: Props) {
  return <span className="error-msg">{children}</span>;
}
