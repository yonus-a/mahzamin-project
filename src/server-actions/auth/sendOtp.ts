"use server";

import getUserbyUsername from "@server-actions/user/getUserByUsername";
import sendOTPSMS from "@/utils/auth/sendOTPSMS";
import addOTP from "./addOPT";
import crypto from "crypto";

export default async function sendOTP(username: string) {
  try {
    if (!username) return { error: "نام کاربری را وارد کنید" };

    const user = await getUserbyUsername(username, {
      select: {
        phone: true,
        id: true,
      },
    });

    if (!user) return { error: "کاربری با این مشخصات یافت نشد" };

    const otp = crypto.randomInt(1111, 9999).toString();

    await sendOTPSMS({
      receptor: user.phone,
      token: otp,
    });

    return await addOTP(user.id, otp);
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
