import "./style.scss";

interface Props {
  info: any;
}

export default function ProductInfo({ info }: Props) {
  return (
    <div className="product-info">
      <ul>
        {info.map(({ id, title, subTitle, logo }: any) => (
          <li key={id}>
            <p className="title">
              <svg aria-hidden="true">
                <use href={`#${logo}`} />
              </svg>
              {title}
            </p>
            <p className="sub-title">{subTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
