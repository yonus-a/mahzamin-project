import prisma from "@lib/prisma";

export default async function getProduct(id: number) {
  return await prisma.product.findMany({
    where: {
      id,
    },
    include: {
      Brand: true,
      Category: true,
      Image: true,
      Detail: true,
      Info: {
        include: {
          Logo: true,
        },
      },
      ProductColor: {
        include: {
          Color: true,
        },
      },
    },
  });
}
