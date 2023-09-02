import prisma from "@lib/prisma";

export default async function getColors(productId: number) {
  return await prisma.productColor.findMany({
    where: {
      productId,
    },
  });
}
