import "./style.scss";

export default function AdminContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="admin-container">{children}</div>;
}
