"use client";

import ErrorContext from "@context/errorContext";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import fetchPost from "@utils/fetchPost";
import CreateForm from "../create-form";

export default function CreateCategory() {
  const [closeDialog, setCloseDialog] = useState(false);
  const { setErrMsg } = useContext<any>(ErrorContext);
  const [value, setValue] = useState();
  const router = useRouter();

  const handleChange = ({ target }: any) => {
    setValue(target.value);
  };

  const handleClick = async () => {
    setCloseDialog(false);

    if (!value) {
      return setErrMsg("لطفا تمام مقادیر را وارد کنید !");
    }

    const res = await fetchPost("http://localhost:3000/api/createCategory", {
      name: value,
    });

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
    <CreateForm
      handleChange={handleChange}
      handleClick={handleClick}
      ariaLabel="create Category"
      close={closeDialog}
    />
  );
}
