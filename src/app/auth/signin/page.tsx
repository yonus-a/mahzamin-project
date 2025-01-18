import { authOptions } from "@app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Logo from "@components/general/logo";
import "./style.scss";
import Auth from "@components/auth";

export default async function Signin({ searchParams }: any) {
  const { callbackUrl } = searchParams;
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="signin">
      <Logo />
      <Auth callbackUrl={callbackUrl} />
    </div>
  );
}
