import "./style.scss";

interface Props {
  desc: string | null;
}

export default function ProductDesc({ desc }: Props) {
  return (
    <div className="product-desc">
      <h2>معرفی</h2>
      <p>{desc}</p>
    </div>
  );
}