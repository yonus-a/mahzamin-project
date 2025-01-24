import "./style.scss";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Readonly<Props>) {
  return <div className="container">{children}</div>;
}
