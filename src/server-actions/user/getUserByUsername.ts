"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export default async function getUserbyUsername(
  username: string,
  options: Prisma.userFindManyArgs
) {
  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            phone: username,
          },
          {
            email: username,
          },
        ],
      },
      ...options,
    });

    return users[0];
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
