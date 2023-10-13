import filterProductBaseCategory from "./filterProductBaseCategory";
import filterProductBaseSearch from "./filterProductBaseSearch";
import filterProductBaseBrand from "./filterProductBaseBrand";
import filterProductBasePrice from "./filterProductBasePrice";
import prisma from "@lib/prisma";
import sort from "./sort";

export default async function getProducts(
  page: number,
  take: number,
  params: any
) {
  const filter = {
    ...filterProductBasePrice(+params.min, +params.max),
    ...filterProductBaseCategory(params.category),
    ...filterProductBaseSearch(params.search),
    ...filterProductBaseBrand(params.brand),
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
    orderBy: sort(params.sort),
    where: filter,
  });

  return {
    totalProduct,
    products,
  };
}
