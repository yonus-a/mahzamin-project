"use server";

import prisma from "@/lib/prisma";

export default async function deleteAllOTPs(userId: string) {
  try {
    return await prisma.otp.deleteMany({
      where: {
        id: userId,
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
