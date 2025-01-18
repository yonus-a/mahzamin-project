"use client";

import CreateColorForm from "../create-color-form";
import ErrorContext from "@context/errorContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import fetchPost from "@utils/fetchPost";

export default function CreateColor() {
  const router = useRouter();
  const [closeDialog, setCloseDialog] = useState(false);
  const { setErrMsg } = useContext<any>(ErrorContext);
  const [values, setValues] = useState({
    name: "",
    code: "#000000",
  });

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = async () => {
    setCloseDialog(false);

    if (!values.name || !values.code) {
      return setErrMsg("لطفا تمام مقادیر را وارد کنید !");
    }

    const res = await fetchPost(
      "http://localhost:3000/api/createColor",
      values
    );

    if (res.ok) {
      setCloseDialog(true);
      router.refresh();
    } else {
      res.json().then(({ error }) => {
        setErrMsg(error);
      });
    }
  };

  return (
    <CreateColorForm
      handleChange={handleChange}
      handleClick={handleClick}
      ariaLabel="create Category"
      close={closeDialog}
    />
  );
}
