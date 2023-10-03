import prisma from "@lib/prisma";

export default async function deleteProduct(id: number) {
  return await prisma.product.delete({
    where: {
      id,
    },
  });
}
