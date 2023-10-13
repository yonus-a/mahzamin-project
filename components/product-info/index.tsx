import Icon from "@components/icon";
import "./style.scss";

interface Props {
  info: any;
}

export default function ProductInfo({ info }: Props) {
  return (
    <div className="product-info">
      <ul>
        {info.map(({ id, title, subTitle, Logo }: any) => (
          <li key={id}>
            <p className="title">
              <Icon name={Logo.name} />
              {title}
            </p>
            <p className="sub-title">{subTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
