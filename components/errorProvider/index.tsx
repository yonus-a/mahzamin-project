"use client";

import ErrorContext from "@context/errorContext";
import Error from "@components/error";
import { useState } from "react";

export default function ErrorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [msg, setMsg] = useState("");

  const setErrMsg = (val: any) => {
    setMsg(val);
  };

  const dropErr = () => {
    setMsg("");
  };

  return (
    <ErrorContext.Provider value={{ msg, setErrMsg }}>
      {msg ? <Error msg={msg} dropErr={dropErr} /> : ""}
      {children}
    </ErrorContext.Provider>
  );
}
