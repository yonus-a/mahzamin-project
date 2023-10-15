"use client";

import PrimaryBtn from "@components/primary-btn";
import { signOut } from "next-auth/react";
import Logo from "@components/logo";
import "./style.scss";

export default function SignOut() {
  const handleClick = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="signOut">
      <Logo />
      <h1>خروج از حساب کاربری</h1>
      <p>آیا از خروج خود مطمئن هستید ؟</p>
      <PrimaryBtn onClick={handleClick}>خروج از حساب</PrimaryBtn>
    </div>
  );
}
