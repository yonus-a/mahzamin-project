"use server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function getUser(options: Prisma.userFindManyArgs = {}) {
  try {
    return await prisma.user.findFirst({
      ...options,
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
