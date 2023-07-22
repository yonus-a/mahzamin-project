import prisma from "@lib/prisma";
import "./style.scss";

interface Props {
  id: number;
}

export default async function ProductInfo({ id }: Props) {
  const info = await prisma.productInfo.findMany({
    where: {
      productId: id,
    },
  });

  return (
    <div className="product-info">
      <ul>
        {info.map(({ id, title, subTitle, logo }) => (
          <li key={id}>
            <p className="title">
              <svg>
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
