import prisma from "@lib/prisma";

export default async function getProductImages(productId: number) {
  return await prisma.productImage.findMany({
    where: {
      productId
    }
  });
}
