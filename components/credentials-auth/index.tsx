"use client";

import { useRouter } from "next/navigation";
import LabledInput from "../labeld-input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import PrimaryBtn from "../primary-btn";
import "./style.scss";

interface Props {
  setErrorMsg: any;
  callbackUrl: string;
}

export default function CredentialsAuth({ setErrorMsg, callbackUrl }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", { redirect: false, ...data });

    if (result?.ok) {
      router.push(callbackUrl);
    } else {
      setErrorMsg(result?.error);
    }
  };

  return (
    <form className="credentials-auth" onSubmit={handleSubmit(onSubmit)}>
      <LabledInput
        register={register}
        errors={errors}
        label="ایمیل"
        name="email"
        type="email"
      />
      <LabledInput
        register={register}
        errors={errors}
        label="رمز عبور"
        name="password"
        type="password"
      />
      <PrimaryBtn type="submit">ثبت نام</PrimaryBtn>
    </form>
  );
}
