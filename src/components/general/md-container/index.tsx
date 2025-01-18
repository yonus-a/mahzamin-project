import "./style.scss";

interface Props {
  children: React.ReactNode;
}

export default function MdContainer({ children }: Props) {
  return <div className="md-container">{children}</div>;
}
