import ShowImages from "@components/show-images";
import prisma from "@lib/prisma";

export default async function ProductImages({
  main,
  id,
}: {
  main: string;
  id: number;
}) {
  const images = await prisma.productImage.findMany({
    where: {
      productId: id,
    },
  });

  return <ShowImages main={main} images={images} alt="" />;
}
