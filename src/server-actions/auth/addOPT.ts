"use server";

import deleteAllOTPs from "./deleteAllOTPs";
import { addMinutes } from "date-fns";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export default async function addOTP(userId: string, otp: string) {
  try {
    await deleteAllOTPs(userId);

    const hashedOtp = await bcrypt.hash(otp, 10);

    return await prisma.otp.create({
      data: {
        expiry: +addMinutes(new Date(), 2),
        otp: hashedOtp,
        id: userId,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
