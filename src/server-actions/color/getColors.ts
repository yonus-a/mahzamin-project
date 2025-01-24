"use server";

import { Prisma } from "@prisma/client";
import prisma from "@lib/prisma";

export default async function getColors(
  options: Prisma.product_colorFindManyArgs = {}
) {
  try {
    return await prisma.product_color.findMany({
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
