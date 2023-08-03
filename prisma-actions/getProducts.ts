import prisma from "@lib/prisma";
import filterProductBaseCategory from "./filterProductBaseCategory";

export default async function getProducts(
  page: number,
  take: number,
  params: any
) {
  const filter = {
    ...(await filterProductBaseCategory(params.category)),
  };

  const totalProduct = await prisma.product.count({
    where: filter,
  });

  const products = await prisma.product.findMany({
    skip: page * take,
    take: take,
    select: {
      id: true,
      name: true,
      image: true,
    },
    orderBy: {
      id: "desc",
    },
    where: filter,
  });

  return {
    totalProduct,
    products,
  };
}
