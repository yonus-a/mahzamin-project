"use client";

import CredentialsAuth from "../credentials-auth";
import GithubAuth from "../github-auth";
import { useState } from "react";
import "./style.scss";

interface Props {
  callbackUrl: string;
}

export default function Auth({ callbackUrl }: Props) {
  const [error, setError] = useState("");

  const setErrorMsg = (msg: string) => {
    setError(msg);
  };

  return (
    <div className="auth">
      <div className="error">{error}</div>
      <GithubAuth callbackUrl={callbackUrl} />
      <p className="seperator">
        <span className="text">or</span>
        <span className="line"></span>
      </p>
      <CredentialsAuth callbackUrl={callbackUrl} setErrorMsg={setErrorMsg} />
    </div>
  );
}
