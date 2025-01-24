"use server";

import { Prisma } from "@prisma/client";
import prisma from "@lib/prisma";

export default async function getCategories(
  options: Prisma.categoryFindManyArgs = {}
) {
  try {
    return await prisma.category.findMany({
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
