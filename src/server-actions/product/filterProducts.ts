import filterProductBaseCategory from "../../utils/filters/product/filterProductBaseCategory";
import filterProductBaseSearch from "../../utils/filters/product/filterProductBaseSearch";
import filterProductBaseBrand from "../../utils/filters/product/filterProductBaseBrand";
import filterProductBasePrice from "../../utils/filters/product/filterProductBasePrice";
import { filterProductsType } from "./type";
import prisma from "@lib/prisma";

export default async function filterProducts({
  searchParams,
  page,
  take,
  ...options
}: filterProductsType) {
  try {
    const filter = {
      ...filterProductBaseCategory(searchParams),
      ...filterProductBaseSearch(searchParams),
      ...filterProductBaseBrand(searchParams),
      ...filterProductBasePrice(searchParams),
      deleted: 0,
    };

    const products = await prisma.product.findMany({
      skip: page * take,
      where: filter,
      take: take,
      ...options,
    });

    const totalProduct = await prisma.product.count({
      where: filter,
    });

    return {
      totalProduct,
      products,
    };
  } catch (e) {
    console.log(e);
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
