import prisma from "@lib/prisma";
import filterProductBaseCategory from "./filterProductBaseCategory";
import filterProductBaseBrand from "./filterProductBaseBrand";
import filterProductBasePrice from "./filterProductBasePrice";
import filterProductBaseSearch from "./filterProductBaseSearch";
import sort from "./sort";

export default async function getProducts(
  page: number,
  take: number,
  params: any
) {
  const filter = {
    ...(await filterProductBaseCategory(params.category)),
    ...(await filterProductBaseBrand(params.brand)),
    ...filterProductBasePrice(+params.min, +params.max),
    ...filterProductBaseSearch(params.search),
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
