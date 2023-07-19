import ShowImages from "@components/product-carousel";
import prisma from "@lib/prisma";


interface Props {
  main: string | null;
  alt: string | null;
  productId: number;
}

export default async function ProductImages({ main, productId, alt }: Props) {
  const images = await prisma.productImage.findMany({
    where: {
      productId,
    },
  });

  return <ShowImages main={main} images={images} alt={alt} />;
}
