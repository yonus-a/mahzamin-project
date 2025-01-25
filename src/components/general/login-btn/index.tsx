import getSession from "@server-actions/auth/getSession";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function LoginBtn() {
  // const session = await getServerSession(authOptions);
  const session = await getSession();

  if (session) {
    return (
      <Link href="api/auth/signout" className="login">
        خروج از حساب
      </Link>
    );
  }

  return (
    <Link href="api/auth/signin" className="login">
      ورود/ثبت نام
    </Link>
  );
}
