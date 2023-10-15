"use client";

import { signIn } from "next-auth/react";
import Button from "../button";
import Image from "next/image";
import "./style.scss";

interface Props {
  callbackUrl: string;
}

export default function GithubAuth({ callbackUrl }: Props) {
  return (
    <Button
      className="github-btn"
      onClick={() => signIn("github", { callbackUrl })}
    >
      ورود با گیت هاب
      <Image
        src="/images/icons/github.svg"
        width={24}
        height={24}
        alt="github"
      />
    </Button>
  );
}
