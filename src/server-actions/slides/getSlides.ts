import { Prisma } from "@prisma/client";
import prisma from "@lib/prisma";

export default async function getSlides(options: Prisma.slideFindManyArgs) {
  try {
    return await prisma.slide.findMany({
      ...options,
      where: {
        deleted: 0,
        ...(options.where || {}),
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
