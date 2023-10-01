import "./style.scss";

export default function ErrorMsg({ children }: { children: React.ReactNode }) {
  return <span className="error-msg">{children}</span>;
}
