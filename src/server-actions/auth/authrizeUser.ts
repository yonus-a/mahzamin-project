"use server";

import getUserbyUsername from "@server-actions/user/getUserByUsername";
import { LoginType } from "@/app/auth/signin/type";
import bcryptjs from "bcryptjs";

export default async function authorizeUser(data: LoginType) {
  const { username, otp } = data;

  const user: any = await getUserbyUsername(username, {
    select: {
      otp: true,
      id: true,
    },
  });

  if (!user) throw new Error("کاربری با مشخصات فوق یافت نشد");

  const dbOTP = user.otp;

  if (Date.now() > dbOTP.expiry) {
    throw new Error("رمز عبور منقضی شده است");
  }

  const matchOTP = await bcryptjs.compare(otp, dbOTP.otp);

  if (!matchOTP) throw new Error("رمز موقت شما اشتباه است");

  return user;
}
