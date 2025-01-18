"use server";

import { Prisma } from "@prisma/client";
import prisma from "@lib/prisma";

export default async function getBrands(
  options: Prisma.brandFindManyArgs = {}
) {
  try {
    return await prisma.brand.findMany({
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
