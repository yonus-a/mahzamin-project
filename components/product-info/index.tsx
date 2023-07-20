import prisma from "@lib/prisma";

interface Props {
  id: number;
}

export default async function ProductInfo({ id }: Props) {
  const info = prisma.productInfo.findMany({
    where: {
      productId: id,
    },
  });

  return <div className="product-info">
    <ul>
        {info.map(({title, subTitle, logo}) => (
            
        ))}
    </ul>
  </div>;
}
