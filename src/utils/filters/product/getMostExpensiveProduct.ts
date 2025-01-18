import prisma from "@lib/prisma";

export default async function getMostExpensiveProduct() {
  return await prisma.product.findFirst({
    orderBy: {
      price: "desc",
    },
  });
}
