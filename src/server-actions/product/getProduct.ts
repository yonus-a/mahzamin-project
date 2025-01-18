"use server";

import { Prisma } from "@prisma/client";
import prisma from "@lib/prisma";

export default async function getProduct(options: Prisma.productFindFirstArgs) {
  try {
    return await prisma.product.findFirst({
      ...options,
      where: {
        deleted: 0,
        ...(options.where || {}),
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده است");
  }
}
