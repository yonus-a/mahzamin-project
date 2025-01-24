import getSession from "@server-actions/auth/getSession";
import Logo from "@components/general/logo";
import { redirect } from "next/navigation";
import Login from "@components/auth/login";
import "./style.scss";

export default async function Signin() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <section aria-label="Signin" className="signin">
      <div className="content-box">
        <div className="image"></div>
        <div className="flex-wrapper">
          <div className="input-wrapper">
            <Logo />
            <h2>به پیکالا خوش آمدید !!</h2>
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}
