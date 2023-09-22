import prisma from "@lib/prisma";

export default function getProduct(id: number) {
  return prisma.product.findMany({
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
        select: {
          Color: true,
        },
      },
    },
  });
}
